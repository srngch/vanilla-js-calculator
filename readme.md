# Vanilla Javascript Calculator

A simple calculator app in vanilla JavaScript with components.

## Deployment

[https://srngch.github.io/vanilla-js-calculator/](https://srngch.github.io/vanilla-js-calculator/)

## Requirements Specification

- MacOS(iOS) 계산기 앱 클론 코딩
- 버튼
  - `0` ~ `9`: 숫자를 입력한다
  - `.`: 소수점을 입력한다
  - `+`, `-`, `×`, `÷`: 사칙연산
  - `=`: 결과를 불러온다. 반복해서 누를 경우 결과에 마지막 연산과 피연산을 반복한다(`3+1` 결과 4 -> `4+1` 결과 5 -> `5+1` 결과 6 )
  - `AC`: All Clear. 0으로 계산기를 초기화환다
  - `C`: Clear. 마지막으로 입력된 숫자를 지운다(`3+1` -> `3+`)
  - `+/-`: +, - 부호를 토글한다
  - `%`: 현재 숫자의 백분률을 구한다

## Versions

### 0.0.1

- 기본 사칙연산
- 부호 전환 버튼
- 퍼센트 버튼
- `=` 버튼 반복 작동
- 기본 스타일링 적용

### 0.0.2

- 숫자 두 번 깜빡임 수정

##### refactoring

- `src/js/components/Display.js`
  - 안 쓰는 클릭 이벤트를 제거함
- `src/js/components/Controller.js`
  - private 메서드의 이름 변경
- `src/css/style.css`
  - `.display-number`의 애니메이션을 담당하는 클래스 이름을 `flicker`로 변경

##### Fix some errors

- 숫자 표시 화면창 클릭하면 `undefined`가 표시됨
- `.`이 여러 개 입력됨
- 최대 `999,999,999`까지만 입력 가능
- 키보드: 유효한 키만 입력될 수 있도록 수정

## Todo

- [ ] 리팩토링
- [ ] 디버깅 [에러 내용]()
- [ ] 스타일링
- [ ] 10자리 이상 숫자를 표시할 때 텍스트 사이즈 조절
