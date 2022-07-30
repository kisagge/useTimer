# useTimer - Typescript / React

useTimer hook 을 사용해서 만든 increase Timer입니다.

parameter 값으로는 initialValue: 초기값, ms: 카운트간격(ms), isIncrease: 증가 or 감소

return 값으로는 count: 타이머 카운트, start: 타이머 시작, stop: 타이머 종료, reset: 타이머 초기

stop 함수에서 setInterval을 clear하기 위해서 useRef를 사용하였습니다.

IncreaseTimerPage에서는 start, stop, reset 버튼과 각각 버튼의 disabled state를 만들어서 타이머를 관리했습니다.

고려하셔야 할 예외처리는 initialValue와 count가 같을 경우를 고려해서 작성하면 됩니다.
