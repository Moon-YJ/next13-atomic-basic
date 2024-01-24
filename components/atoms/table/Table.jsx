import clsx from 'clsx';
import styles from './table.module.scss';
import Text from '../text/Text';

/*
  thead
    (No, name, age, address)
  tbody
    tr(반복) > td(no) > td(name) > td(age) > td(address)
*/

// pages > find-recipe > [id].jsx에서 Table 컴포넌트 import

export function TableCol({
	data,
	title,
	className,
	isCount = false,
	reverse = false,
}) {
	data = reverse ? [...data].reverse() : [...data];
	return (
		<>
			{title && (
				<Text tagName='h1' styleType='title1'>
					{title}
				</Text>
			)}
			<table className={clsx(styles.table, className)} border={1}>
				<thead>
					<tr>
						{isCount && <th scope='col'>No.</th>}
						{Object.keys(data[0]).map((key) => (
							<th key={key}>{key}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((el, idx) => {
						return (
							<tr key={el + idx}>
								{isCount && <td>{reverse ? data.length - idx : idx + 1}</td>}
								{Object.values(el).map((val, idx) => (
									<td key={val + idx}>{val}</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

export function TableRow({
	data,
	title,
	className,
	isCount = false,
	reverse = false,
}) {
	data = reverse ? [...data].reverse() : [...data];
	// 키값만 배열로 추출
	const keys = Object.keys(data[0]);

	return (
		<>
			{title && (
				<Text tagName='h1' styleType='title1'>
					{title}
				</Text>
			)}
			<table className={clsx(styles.table, className)} border={1}>
				<tbody>
					{/* key의 종류에 따라서 tr을 생성하기 때문에 전달된 data 배열의 개수만큼 반복도는것이 아닌 객체안의 key의 개수만큼 반복 */}
					{/* idx - key의 반복 순번 */}
					{keys.map((_, idx) => {
						return (
							// tr 반복
							<tr key={idx}>
								<th scope='row'>{keys[idx]}</th>
								{/* 내부적으로 반족을 돌때는 데이터 배열의 개수만큼 td가 생성되어야하기 때문에 data로 반복처리 */}
								{data.map((_, idx2) => (
									// td반복
									// 0번째 tr을 반복돌때 0번째 데이터에서 0번째 키값인 name값을 출력
									// 0번째 tr을 반복돌때 1번째 데이터에서 0번째 키값인 name값을 출력
									// 0번째 tr을 반복돌때 2번째 데이터에서 0번째 키값인 name값을 출력
									// 0: data[0][keys[0]] => name, data[1][keys[0]] => age, data[2][keys[0]] => address

									// 1번째 tr을 반복돌때 0번째 데이터에서 1번째 키값인 age값을 출력
									// 1번째 tr을 반복돌때 1번째 데이터에서 1번째 키값인 age값을 출력
									// 1번째 tr을 반복돌때 2번째 데이터에서 1번째 키값인 age값을 출력
									// 1: data[0][keys[1]], data[1][keys[1]], data[2][keys[1]]

									// 2번째 tr을 반복돌때 0번째 데이터에서 2번째 키값인 address값을 출력
									// 2번째 tr을 반복돌때 1번째 데이터에서 2번째 키값인 address값을 출력
									// 2번째 tr을 반복돌때 2번째 데이터에서 2번째 키값인 address값을 출력
									// 2: data[0][keys[2]], data[1][keys[2]], data[2][keys[2]]

									// idx2 - data배열의 반복 순번
									// td는 data의 개수만큼 반복을 돌면서 상위에서 반복도는 순번의 key값의 데이터만 출력
									<td key={idx2}>{data[idx2][keys[idx]]}</td>
								))}
							</tr>
						);
					})}
				</tbody>
			</table>
		</>
	);
}

/*
  2차원 배열 
  - 배열의 요소안에 또다시 배열이 들어가있는 경우
  - 상위 배열의 반복을 돌때 다시 내부적으로 하위요소 또다시 반복처리 (중첩 반복문)
  2차원 배열을 제일 많이 쓰는 사례 
  - DB(table형식의 DB)에서 자료를 순차적으로 뽑아야될 때

  <tr>
    <td>0-0</td> <td>0-1</td> <td>0-2</td>
  </tr>
  <tr>
    <td>1-0</td> <td>1-1</td> <td>1-2</td>
  </tr>
  위의 로직을 반복문으로 풀었을때
  아래로직은 tr이 한번 반복돌때 내부적으로 td세번 반복처리
  trArr.map((tr, idx0)=>{
    //tr 반복처리
    console.log(idx0) --> 0,1
    tdArr.map((td, idx1)=>{
      //td 반복처리
      console.log(idx0+"-"+idx1) 
      0-0,0-1, 0-2 (첫번째) tr반복시)
      1-0,1-1, 1-2 (두번째 tr반복시)
    })
  })
*/
