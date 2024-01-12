import './App.css'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

const pieData1 = [
  {
    count: 78,
    language: 'Telugu',
  },
  {
    count: 22,
    language: 'Hindi',
  },
]
const pieData2 = [
  {
    count: 95,
    language: 'Telugu',
  },
  {
    count: 5,
    language: 'Hindi',
  },
]
const pieData3 = [
  {
    count: 59,
    language: 'Telugu',
  },
  {
    count: 41,
    language: 'Hindi',
  },
]
const data = [
  {group_name: '20', Employer: 20, Employee: 40, Total_Interest: 70},
  {group_name: '25', Employer: 30, Employee: 40, Total_Interest: 100},
  {group_name: '30', Employer: 30, Employee: 60, Total_Interest: 120},
  {group_name: '35', Employer: 40, Employee: 100, Total_Interest: 170},
  {group_name: '40', Employer: 50, Employee: 120, Total_Interest: 210},
  {group_name: '60', Employer: 70, Employee: 160, Total_Interest: 270},
  {group_name: '65', Employer: 90, Employee: 180, Total_Interest: 320},
]

// Replace your code here
const App = () => {
  const DataFormatter = number => `$${number.toString()}`

  return (
    <div className="bg-container">
      <div className="small-container">
        <div className="side-bar-container">
          <div className="side-bar-top-container">
            <div className="search-container">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzEuOTk5IDMxLjk5OSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggZD0iTTI3LjE5IDE5LjQzN2E0Ljg0OSA0Ljg0OSAwIDAgMC0zLjE0My0zLjA2M2MtMS4yMjgtLjM4Ny0yLjU4Ny0uMjkyLTMuOTc0LjI1NS43NDYtLjk1NiAxLjE4LTEuNjkyIDEuMjI0LTIuMjY0bC4wMDItLjAzOWMuMDY3LTEuMzc5LTEuOTE5LTMuMjU5LTMuODQxLTUuMDc4LTEuMTY2LTEuMTAyLTIuNDg3LTIuMzUyLTIuNjI0LTIuOTEzLS4wNDctLjE5My0uMDk4LS40MjItLjE1NS0uNjc3LS40NDctMi4wMTEtMS4xOTUtNS4zNzYtMy4yMzgtNS42NTMtMS45NjctLjA5OC0zLjA1OCAxLjcyOS0zLjI0MyA1LjQzLS4xNzggMy41ODMuNDk3IDkuMTE4IDEuOTU2IDE2LjEzLS4zOC0uNjgtLjY1Mi0xLjEzMy0uNzQtMS4yMDQtLjIzNS0uMTg4LS43NjgtLjY3MS0xLjMzOC0uOTE0LS4yMjYtLjg0Ny0uNzgyLTIuNzQ4LTEuNDc5LTMuNzYyLS40NTUtL
            jY2Mi0xLjI3My0uODYtMS44ODUtLjc2NC0uNDM2LjA2OS0uNzQ4LjI4Mi0uODMzLjU3YS41Ny41NyAwIDAgMC0uMDIxLjEzMS42MjEuNjIxIDAgMCAwLS4yNjkuMzMyYy0uMDUuMTY5LS4wMzIuNDM4LjMzNS43N2wuMTQ4LS4xNjZjLS4xNTUtLjE0LS4zMjgtLjM0Ny0uMjctLjU0MmEuMzQ2LjM0NiAwIDAgMSAuMDk0LS4xNDFjLjA1MS4xNDIuMTU1LjMwMi4zNS40NzdsLjIyMy0uMjQ2Yy0uMTU3LS4xNDItLjI0OS0uMjc2LS4yNzItLjM5Ni4wNTYtLjAxOC4xMTUtLjAzNC4xNzktLjA0NC40OTQtLjA3OSAxLjE1OS4wOCAxLjUyNC42MS41MzguNzgyLjk5NiAyLjE5MyAxLjI1IDMuMDgyYS44Ny44NyAwIDAgMC0uMjk0LjE2OWMtLjgzNC43MjQgMCAyLjMzNCAwIDIuMzM0czYuMDAyIDguN
            jE1IDYuODkyIDkuNjE1Yy44ODkgMSAxLjkxMS40OTMgMS4xNjctLjg4OS0uMjgtLjUyMS0xLjA3Mi0yLjA1My0xLjk3Mi0zLjc4LjkzMS43NDkgMi40MjkgMS41NjcgMy4yMTkgMS45NzkuMjE3LjA5NSA1LjMwNiAyLjMwOSA4LjI5MSAxLjI0NiAyLjQ2Mi4wMjggMy44MzMtMS4zNjMgMy45NjYtNC4wMjkuMDg1LTEuNjk4LS4zMTctMy44NDYtMS4yMjktNi41NjZ6TTYuMDg1IDE2LjE1MWMtLjQyLS42MTEtMS4xNzctLjc5NC0xLjc0My0uNzA2LS4wMjIuMDA1LS4wNDEuMDEzLS4wNjIuMDE3L
            jA5OC0uMS4yNzEtLjE3OC40ODQtLjIxMi41MDctLjA4IDEuMTg2LjA4MiAxLjU1OC42MjQuNjEuODg4IDEuMTI1IDIuNTUzIDEuMzc1IDMuNDU2LS4xMS0uMDIxLS4yMi0uMDMtLjMyNy0uMDIxLS4yNTYtLjktLjcyMi0yLjMzOC0xLjI4NS0zLjE1OHoiIGZpbGw9IiM2YjFhYzIiIG9wYWNpdHk9IjEiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                alt="butterfly"
                className="image-width"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJfMThfc2VhcmNoIiBkYXRhLW5hbWU9IjE4IHNlYXJjaCI+PHBhdGggZD0ibTQ1LjY3MyAyNS4wOWEyMC40NTkgMjAuNDU5IDAgMCAxIC0yLjc3MyAxMC4zMjcgMTguNjE1IDE4LjYxNSAwIDAgMSAtMS4wNzEgMS42NXYuMDFhMjIuMDI3IDIyLjAyNyAwIDAgMSAtMi4xOTEgMi41NjcgMjEuMTg5IDIxLjE4OSAwIDAgMSAtMi41NzcgMi4xOTEgMTcuODY3IDE3Ljg2NyAwIDAgMSAtMS42NiAxLjA3MSAyMC42MzkgMjAuNjM5IDAgMSAxIDEwLjI3Mi0xNy44MTZ6IiBmaWxsPSIjZGNkZmUwIi8+PHBhdGggZD0ibTM1LjAxOCAzNS4wMjFhMTQuMDQ4IDE0LjA0OCAwIDEgMSAwLTE5Ljg3MiAxMy45NTIgMTMuOTUyIDAgMCAxIDAgMTkuODcyeiIgZmlsbD0iI2ZjZmRmZiIvPjxwYXRoIGQ9Im01Ny45NTkgNTcuOTUzYTUuMzM2IDUuMzM2IDAgMCAxIC03LjUwOCAwbC0xNS4wNTEtMTUuMDQ3YTE3Ljg2NyAxNy44NjcgMCAwIDAgMS42Ni0xLjA3MSAyMS4xODkgMjEuMTg5IDAgMCAwIDIuNTc3LTIuMTkxIDIyLjAyNyAyMi4wMjcgMCAwIDAgMi4xOTEtMi41Njd2LS4wMWExOC42MTUgMTguNjE1IDAgMCAwIDEuMDcxLTEuNjVsMTUuMDUxIDE1LjAzN2E1LjMyMSA1LjMyMSAwIDAgMSAuMDA5IDcuNDk5eiIgZmlsbD0iI2MyYzJjMyIvPjwvZz48L3N2Zz4="
                alt="search"
                className="image-width"
              />
            </div>
            <div className="home-container">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0i
          NTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzM3NDJkMyIgcng9IjE
          wIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3JlY3Q+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNi43OTggMTAuMTI1YTEuMjIyIDEuMjIyIDAgMCAwLTEuNTkgMGwtNC4wNzIgMy40OWMtLjI3MS4yMzMtLjQyNy41NzItLjQyNy45Mjh2Ny4zOTZjMCAuNjc1LjU0NyAxLjIyMiAxLjIyMiAxLjIyMmg4LjE0NWMuNjc0IDAgMS4yMjEtLjU0NyAxLjIyMS0xLjIyMnYtNy4zOTZjMC0uMzU2LS4xNTUtLjY5NS0uNDI2LS45Mjd6bS0yLjEyLS42MThhMi4wMzYgMi4wMzYgMCAwIDEgMi42NSAwbDQuMDczIDMuNDljLjQ1MS4zODcuNzEuOTUyLjcxIDEuNTQ2djcuMzk2YTIuMDM2IDIuMDM2IDAgMCAxLTIuMDM1IDIuMDM2SDExLjkzYTIuMDM2IDIuMDM2IDAgMCAxLTIuMDM2LTIuMDM2di03LjM5NmMwLS41OTQuMjYtMS4xNTkuNzEtMS41NDV6IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTE2Ljc4NyAxMC4xMDJhMS4yMjIgMS4yMjIgMCAwIDAtMS41NzQgMGwtNi4zNzcgNS4zN2EuNDA3LjQwNyAwIDEgMS0uNTI0LS42MjNsNi4zNzYtNS4zN2EyLjAzNiAyLjAzNiAwIDAgMSAyLjYyNCAwbDYuMzc3IDUuMzdhLjQwNy40MDcgMCAxIDEtLjUyNS42MjN6TTE1LjU5IDE3LjQ2Yy0uNjc0IDAtMS4yMi41NDctMS4yMiAxLjIyMnYyLjg1YS40MDcuNDA3IDAgMCAxLS44MTUgMHYtMi44
          NWMwLTEuMTI1LjkxMS0yLjAzNiAyLjAzNi0yLjAzNmguODE0YzEuMTI1IDAgMi4wMzcuOTExIDIuMDM3IDIuMDM2djIuODVhLjQwNy40MDcgMCAxIDEtLjgxNSAwdi0yLjg1YzAtLjY3NS0uNTQ3LTEuMjIyLTEuMjIyLTEuMjIyeiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
                alt="home"
                className="image-width"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaGVpZ2h0PSI1MTIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTMwLjc1NCA3LjgzOWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMjZjLS43MyAwLTEuNDI5LjI5LTEuOTQ1LjgwNnMtLjgwNSAxLjIxNS0uODA1IDEuOTQ0djE3LjAyM2MwIC43MjkuMjg5IDEuNDI4LjgwNSAxLjk0NHMxLjIxNS44MDYgMS45NDUuODA2aDI0Yy43MjkgMCAxLjQyOC0uMjkgMS45NDQtLjgwNnMuODA2LTEuMjE1LjgwNi0xLjk0NGMwLTUuMjUgMC0xOS4wMjMgMC0xOS4wMjN6bS0xLjUuNzV2MTguMjczYzAgLjMzMS0uMTMyLjY0OS0uMzY2Ljg4My0uMjM1LjIzNS0uNTUzLjM2Ny0uODg0LjM2N2gtMjRjLS4zMzIgMC0uNjUtLjEzMi0uODg0LS4zNjctLjIzNS0uMjM0LS4zNjYtLjU1Mi0uMzY2LS44ODMgMC00LjAxNCAwLTEzLjAwOSAwLTE3LjAyMyAwLS4zMzEuMTMxLS42NDkuMzY2LS44ODMuMjM0LS4yMzUuNTUyLS4zNjcuODg0LS4zNjd6Ii8+PHBhdGggZD0ibTIuMDA0IDI1LjcyaDI4Yy40MTQgMCAuNzUtLjMzNy43NS0uNzUgMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTI4Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzUgMCAuNDEzLjMzNi43NS43NS43NXoiLz48cGF0aCBkPSJtMzAuNzU0IDcuODM5di0yLjQ4OWMwLTEuNTE4LTEuMjMyLTIuNzUtMi43NS0yLjc1LTMuMTE1IDAtOS4wODEgMC0xMi4xMzIgMC0uNzAzIDAtMS4zNzcuMjgtMS44NzQuNzc2LS40OTYuNDk3LS43NzYgMS4xNzEtLjc3NiAxLjg3NHYyLjU4OWMwIC40MTUuMzM2Ljc1Ljc1Ljc1aDE2LjAzMmMuNDE0IDAgLjc1LS4zMzUuNzUtLjc1em0tMS41LTIuNDg5djEuNzM5aC0xNC41MzJ2LTEuODM5YzAtLjMwNS4xMjEtLjU5Ny4zMzctLjgxMy4yMTYtLjIxNS41MDgtLjMzNy44MTMtLjMzN2gxMi4xMzJjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV6Ii8+PHBhdGggZD0ibTE0LjcyMiA0Ljk4MmMwLS40MTQtLjMzNS0uNzUtLjc1LS43NWgtNC43MzNjLS43MTkgMC0xLjQwOS4yODYtMS45MTcuNzk0LS41MDkuNTA5LS43OTQgMS4xOTgtLjc5NCAxLjkxN3YuODg1cy43NS43NjEuNzUuNzYxaDYuNjk0Yy40MTUgMCAuNzUtLjMzNS43NS0uNzV6bS02LjY5NCAyLjEwN3YtLjE0NmMwLS4zMjEuMTI3LS42MjkuMzU0LS44NTZzLjUzNS0uMzU1Ljg1Ny0uMzU1aDMuOTgzdjEuMzU3eiIvPjxwYXRoIGQ9Im0xNi4xNTggMTEuMTM4Yy0uMTAyLjAxOS0uMjA3LjAxOS0uMzA5IDAgMCAwLTQuNzc2LS45MjItNC43NzYtLjkyMi0uNTg1LS4xMTMtMS4xOTEuMDQxLTEuNjUxLjQyMXMtLjcyNy45NDUtLjcyNyAxLjU0MnY3LjQzMmMwIC45NTguNjggMS43ODEgMS42MiAxLjk2M2w1LjI1IDEuMDE0Yy4yOS4wNTYuNTg4LjA1Ni44NzggMGw1LjI0OS0xLjAxNGMuOTQxLS4xODIgMS42Mi0xLjAwNSAxLjYyLTEuOTYzdi03LjQzMmMwLS41OTctLjI2Ni0xLjE2Mi0uNzI2LTEuNTQyLS40NjEtLjM4LTEuMDY2LS41MzQtMS42NTItLjQyMXptLjI4NSAxLjQ3MyA0Ljc3NS0uOTIzYy4xNDctLjAyOC4yOTguMDExLjQxMy4xMDYuMTE1LjA5NC4xODEuMjM2LjE4MS4zODV2Ny40MzJjMCAuMjM5LS4xNy40NDUtLjQwNC40OWwtNS4yNSAxLjAxNGMtLjEwMi4wMTktLjIwNy4wMTktLjMwOSAwIDAgMC01LjI0OS0xLjAxNC01LjI0OS0xLjAxNC0uMjM1LS4wNDUtLjQwNS0uMjUxLS40MDUtLjQ5di03LjQzMmMwLS4xNDkuMDY3LS4yOTEuMTgxLS4zODUuMTE1LS4wOTUuMjY3LS4xMzQuNDEzLS4xMDZsNC43NzYuOTIzYy4yOS4wNTYuNTg4LjA1Ni44NzggMHoiLz48cGF0aCBkPSJtMTEuNTIgMTQuOTk5IDIuNTE2LjQ4NWMuNDA2LjA3OS44LS4xODcuODc5LS41OTQuMDc4LS40MDYtLjE4OC0uOC0uNTk1LS44NzhsLTIuNTE1LS40ODZjLS40MDctLjA3OS0uOC4xODgtLjg3OS41OTQtLjA3OC40MDYuMTg4LjguNTk0Ljg3OXoiLz48cGF0aCBkPSJtMjAuMzUxIDEzLjUyNi0yLjQ5OC40ODJjLS40MDcuMDc5LS42NzMuNDcyLS41OTQuODc5LjA3OC40MDYuNDcyLjY3Mi44NzguNTk0bDIuNDk4LS40ODJjLjQwNy0uMDc5LjY3My0uNDczLjU5NS0uODc5LS4wNzktLjQwNi0uNDczLS42NzMtLjg3OS0uNTk0eiIvPjxwYXRoIGQ9Im0xMS41MiAxOC40MyAyLjUxNi40ODZjLjQwNi4wNzguOC0uMTg4Ljg3OS0uNTk1LjA3OC0uNDA2LS4xODgtLjgtLjU5NS0uODc4bC0yLjUxNS0uNDg2Yy0uNDA3LS4wNzgtLjguMTg4LS44NzkuNTk0LS4wNzguNDA3LjE4OC44LjU5NC44Nzl6Ii8+PHBhdGggZD0ibTIwLjM1MSAxNi45NTctMi40OTguNDgyYy0uNDA3LjA3OS0uNjczLjQ3My0uNTk0Ljg3OS4wNzguNDA2LjQ3Mi42NzMuODc4LjU5NGwyLjQ5OC0uNDgyYy40MDctLjA3OS42NzMtLjQ3Mi41OTUtLjg3OS0uMDc5LS40MDYtLjQ3My0uNjcyLS44NzktLjU5NHoiLz48L3N2Zz4="
                alt="file and folder"
                className="image-width"
              />
              <img
                src="data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnNyIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGlkPSJwYXRoMzY4MyIgZD0ibTE0LjAwOSAzLjk5OWMtMS41OSAwLTMuMTE1LjYzMy00LjI0IDEuNzU4LTEuMTI0IDEuMTI0LTEuNzU4IDIuNjU3LTEuNzU4IDQuMjQ4djQzLjk5NWMwIDEuNTkxLjYzNCAzLjEyNCAxLjc1OCA0LjI0OCAxLjEyNSAxLjEyNSAyLjY1IDEuNzU4IDQuMjQgMS43NThoMzYuMDA0YzEuNTkxIDAgMy4xMjQtLjYzMyA0LjI0OC0xLjc1OCAxLjEyNS0xLjEyNCAxLjc1LTIuNjU3IDEuNzUtNC4yNDh2LTQzLjk5NWMwLTEuNTkxLS42MjUtMy4xMjQtMS43NS00LjI0OC0xLjEyNC0xLjEyNS0yLjY1Ny0xLjc1OC00LjI0OC0xLjc1OGgtMzYuMDA0em0wIDQuMDA0aDM2LjAwNGMuNTM0IDAgMS4wNC4yMSAxLjQxNi41ODYuMzc1LjM3NS41ODYuODgxLjU4NiAxLjQxNnY0My45OTVjMCAuNTM1LS4yMTEgMS4wNDEtLjU4NiAxLjQxNi0uMzc1LjM3Ni0uODgyLjU4Ni0xLjQxNi41ODZoLTM2LjAwNGMtLjUzNCAwLTEuMDMyLS4yMS0xLjQwOC0uNTg2LS4zNzUtLjM3NS0uNTg2LS44ODEtLjU4Ni0xLjQxNnYtNDMuOTk1YzAtLjUzNS4yMTEtMS4wNDEuNTg2LTEuNDE2LjM3Ni0uMzc2Ljg3NC0uNTg2IDEuNDA4LS41ODZ6Ii8+PHBhdGggaWQ9InBhdGgzNjc5IiBkPSJtMjUuMDEyIDE4LjAwNWMtMS4wOTUtLjAwMS0xLjk5OC44OTgtMi4wMDIgMS45OTR2LjAwMWMwIDEuMDk4LjkwMyAyLjAwMSAyIDIuMDAxaDE0LjAwMmMxLjA5NyAwIDItLjkwMyAyLTIuMDAxdi0uMDAxYy0uMDAzLTEuMDk2LS45MDYtMS45OTUtMi4wMDItMS45OTR6Ii8+PHBhdGggaWQ9InBhdGgzNjc1IiBkPSJtMjUuMDEyIDMwcy0uMDAxIDAtLjAwMiAwYy0xLjA5NyAwLTIgLjkwMy0yIDJ2LjAwNGMwIDEuMDk4LjkwMyAyIDIgMmgxNC4wMDJjMS4wOTcgMCAyLS45MDIgMi0ydi0uMDA0YzAtMS4wOTctLjkwMy0yLTItMi0uMDAxIDAtLjAwMSAwLS4wMDIgMHoiLz48cGF0aCBpZD0icGF0aDM2NzEiIGQ9Im0yNS4wMTIgNDIuMDA0cy0uMDAxIDAtLjAwMiAwYy0xLjA5NyAwLTIgLjkwMy0yIDJ2LjAwMmMuMDA0IDEuMDk2LjkwNyAxLjk5NSAyLjAwMiAxLjk5NGgxMy45OThjMS4wOTYuMDAxIDEuOTk5LS44OTggMi4wMDItMS45OTQgMCAwIDAtLjAwMSAwLS4wMDIgMC0xLjA5Ny0uOTAzLTItMi0yLS4wMDEgMC0uMDAxIDAtLjAwMiAweiIvPjwvc3ZnPg=="
                alt="note"
                className="image-width"
              />
              <img
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDBjLTc0LjQzOSwwLTEzNSw2MC41NjEtMTM1LDEzNXM2MC41NjEsMTM1LDEzNSwxMzVzMTM1LTYwLjU2MSwxMzUtMTM1UzMzMC40MzksMCwyNTYsMHogTTI1NiwyNDANCgkJCWMtNTcuODk3LDAtMTA1LTQ3LjEwMy0xMDUtMTA1YzAtNTcuODk3LDQ3LjEwMy0xMDUsMTA1LTEwNWM1Ny44OTcsMCwxMDUsNDcuMTAzLDEwNSwxMDVDMzYxLDE5Mi44OTcsMzEzLjg5NywyNDAsMjU2LDI0MHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1DQoJCQlDNTEuMjU1LDM5NS41MzksMzEsNDQ0LjgzMywzMSw0OTdjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWg0MjBjOC4yODQsMCwxNS02LjcxNiwxNS0xNQ0KCQkJQzQ4MSw0NDQuODMzLDQ2MC43NDUsMzk1LjUzOSw0MjMuOTY2LDM1OC4xOTV6IE02MS42Niw0ODJjNy41MTUtODUuMDg2LDc4LjM1MS0xNTIsMTY0LjM0LTE1Mmg2MA0KCQkJYzg1Ljk4OSwwLDE1Ni44MjUsNjYuOTE0LDE2NC4zNCwxNTJINjEuNjZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                alt="profile"
                className="image-width"
              />
            </div>
          </div>
          <div className="notification-container">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PHBhdGggZD0ibTE2IDguNzVhMy43NSAzLjc1IDAgMSAxIDMuNzUtMy43NSAzLjc1NDczIDMuNzU0NzMgMCAwIDEgLTMuNzUgMy43NXptMC02YTIuMjUgMi4yNSAwIDEgMCAyLjI1IDIuMjUgMi4yNTMwOSAyLjI1MzA5IDAgMCAwIC0yLjI1LTIuMjV6IiBmaWxsPSIjN2ZiZGU3Ii8+PGcgZmlsbD0iIzIzMjMyMyI+PHBhdGggZD0ibTE4LjQ2IDE5LjVoLTEyLjkyYTIuNzgyNTYgMi43ODI1NiAwIDAgMSAtMi43NjU2My0yLjQ1MjE1IDMuMjQ5MzMgMy4yNDkzMyAwIDAgMSAtLjAyNDM3LS4zNTc0MiAyLjc2MDQgMi43NjA0IDAgMCAxIC45NDMzNi0yLjA2MTUybC4zNzYtLjMzNzg5YTIuODQ0IDIuODQ0IDAgMCAwIC45MTExMy0xLjYzOTY1bC43ODkwNC00LjczNDM3YTYuMjg5OCA2LjI4OTggMCAwIDEgNS4zODA4Ni01LjIzMDQ3Ljc0OTgxLjc0OTgxIDAgMCAxIC4xOTkyMiAxLjQ4NjMzIDQuNzk4IDQuNzk4IDAgMCAwIC00LjEwMDYxIDMuOTkxMmwtLjc4OSA0LjczOTI2YTQuMzU4NzQgNC4zNTg3NCAwIDAgMSAtMS4zOTI1OCAyLjUwNzgxbC0uMzc2LjMzNzg5YTEuMjYyMiAxLjI2MjIgMCAwIDAgLS40NDE0MS45NDE0MSAxLjc1MDM4IDEuNzUwMzggMCAwIDAgLjAxNTYzLjE4ODQ4IDEuMjc4NjggMS4yNzg2OCAwIDAgMCAxLjI3NDM2IDEuMTIxMDloMTIuOTJhMS4yNzI4OSAxLjI3Mjg5IDAgMCAwIDEuMjc0NDItMS4xNTIzNGMuMDAxLS4wMTA3NS4wMTE3MS0uMDkwODIuMDEyNjktLjEwMTU3YTEuMjk4MzYgMS4yOTgzNiAwIDAgMCAtLjQ1MzEyLTEuMDg0bC0uMjcxNDktLjIyMzYzYTQuMzM4OSA0LjMzODkgMCAwIDEgLTEuNDUyMTktMi41NjE0NmwtLjUxMDc0LTMuMDg1YS43NTAyMy43NTAyMyAwIDAgMSAxLjQ4MDQzLS4yNDQxNWwuNTA5NzYgMy4wODAwOGEyLjgyMDEgMi44MjAxIDAgMCAwIC45Mzg0OCAxLjY2MzA5bC4yNzkzLjIzMDQ2YTIuODE3NzIgMi44MTc3MiAwIDAgMSAuOTY4NzUgMi40MDYyNSAyLjc4ODYgMi43ODg2IDAgMCAxIC0yLjc3NjI5IDIuNTcyMjd6Ii8+PHBhdGggZD0ibTEyIDIyLjc1YTMuNzU0NzMgMy43NTQ3MyAwIDAgMSAtMy43NS0zLjc1di0uMjVhLjc1Ljc1IDAgMCAxIDEuNSAwdi4yNWEyLjI1IDIuMjUgMCAwIDAgNC41IDB2LS4yNWEuNzUuNzUgMCAwIDEgMS41IDB2LjI1YTMuNzU0NzMgMy43NTQ3MyAwIDAgMSAtMy43NSAzLjc1eiIvPjwvZz48L2c+PC9zdmc+"
              alt="notifications"
              className="image-width"
            />
            <img
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0ibTM2My4zMzUgNDg4YTI0IDI0IDAgMCAxIC0yNCAyNGgtMjI2LjI1M2E4MC4wOSA4MC4wOSAwIDAgMSAtODAtODB2LTM1MmE4MC4wOSA4MC4wOSAwIDAgMSA4MC04MGgyMjYuMjUzYTI0IDI0IDAgMCAxIDAgNDhoLTIyNi4yNTNhMzIuMDM1IDMyLjAzNSAwIDAgMCAtMzIgMzJ2MzUyYTMyLjAzNCAzMi4wMzQgMCAwIDAgMzIgMzJoMjI2LjI1M2EyNCAyNCAwIDAgMSAyNCAyNHptMTA4LjU1My0yNDguOTctMTE0LjA1MS0xMTQuMDUyYTI0IDI0IDAgMSAwIC0zMy45MzcgMzMuOTQxbDczLjA3NyA3My4wODFoLTE4OC45MzZhMjQgMjQgMCAxIDAgMCA0OGgxODguOTM1bC03My4wOCA3My4wOGEyNCAyNCAwIDEgMCAzMy45NDEgMzMuOTQxbDExNC4wNTEtMTE0LjA1YTI0IDI0IDAgMCAwIDAtMzMuOTQxeiIvPjwvc3ZnPg=="
              alt="logout"
              className="image-width"
            />
          </div>
        </div>
        <div className="image-container">
          <div className="icon-image">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PHBhdGggZD0ibTE2IDguNzVhMy43NSAzLjc1IDAgMSAxIDMuNzUtMy43NSAzLjc1NDczIDMuNzU0NzMgMCAwIDEgLTMuNzUgMy43NXptMC02YTIuMjUgMi4yNSAwIDEgMCAyLjI1IDIuMjUgMi4yNTMwOSAyLjI1MzA5IDAgMCAwIC0yLjI1LTIuMjV6IiBmaWxsPSIjN2ZiZGU3Ii8+PGcgZmlsbD0iIzIzMjMyMyI+PHBhdGggZD0ibTE4LjQ2IDE5LjVoLTEyLjkyYTIuNzgyNTYgMi43ODI1NiAwIDAgMSAtMi43NjU2My0yLjQ1MjE1IDMuMjQ5MzMgMy4yNDkzMyAwIDAgMSAtLjAyNDM3LS4zNTc0MiAyLjc2MDQgMi43NjA0IDAgMCAxIC45NDMzNi0yLjA2MTUybC4zNzYtLjMzNzg5YTIuODQ0IDIuODQ0IDAgMCAwIC45MTExMy0xLjYzOTY1bC43ODkwNC00LjczNDM3YTYuMjg5OCA2LjI4OTggMCAwIDEgNS4zODA4Ni01LjIzMDQ3Ljc0OTgxLjc0OTgxIDAgMCAxIC4xOTkyMiAxLjQ4NjMzIDQuNzk4IDQuNzk4IDAgMCAwIC00LjEwMDYxIDMuOTkxMmwtLjc4OSA0LjczOTI2YTQuMzU4NzQgNC4zNTg3NCAwIDAgMSAtMS4zOTI1OCAyLjUwNzgxbC0uMzc2LjMzNzg5YTEuMjYyMiAxLjI2MjIgMCAwIDAgLS40NDE0MS45NDE0MSAxLjc1MDM4IDEuNzUwMzggMCAwIDAgLjAxNTYzLjE4ODQ4IDEuMjc4NjggMS4yNzg2OCAwIDAgMCAxLjI3NDM2IDEuMTIxMDloMTIuOTJhMS4yNzI4OSAxLjI3Mjg5IDAgMCAwIDEuMjc0NDItMS4xNTIzNGMuMDAxLS4wMTA3NS4wMTE3MS0uMDkwODIuMDEyNjktLjEwMTU3YTEuMjk4MzYgMS4yOTgzNiAwIDAgMCAtLjQ1MzEyLTEuMDg0bC0uMjcxNDktLjIyMzYzYTQuMzM4OSA0LjMzODkgMCAwIDEgLTEuNDUyMTktMi41NjE0NmwtLjUxMDc0LTMuMDg1YS43NTAyMy43NTAyMyAwIDAgMSAxLjQ4MDQzLS4yNDQxNWwuNTA5NzYgMy4wODAwOGEyLjgyMDEgMi44MjAxIDAgMCAwIC45Mzg0OCAxLjY2MzA5bC4yNzkzLjIzMDQ2YTIuODE3NzIgMi44MTc3MiAwIDAgMSAuOTY4NzUgMi40MDYyNSAyLjc4ODYgMi43ODg2IDAgMCAxIC0yLjc3NjI5IDIuNTcyMjd6Ii8+PHBhdGggZD0ibTEyIDIyLjc1YTMuNzU0NzMgMy43NTQ3MyAwIDAgMSAtMy43NS0zLjc1di0uMjVhLjc1Ljc1IDAgMCAxIDEuNSAwdi4yNWEyLjI1IDIuMjUgMCAwIDAgNC41IDB2LS4yNWEuNzUuNzUgMCAwIDEgMS41IDB2LjI1YTMuNzU0NzMgMy43NTQ3MyAwIDAgMSAtMy43NSAzLjc1eiIvPjwvZz48L2c+PC9zdmc+"
              alt="notifications"
              className="image-width"
            />
          </div>
          <div className="top-profile-container">
            <img
              src="https://res.cloudinary.com/ddew83lte/image/upload/v1652329537/samples/people/smiling-man.jpg"
              alt="profile"
              className="profile-image"
            />
            <div>
              <h1 className="profile-heading">Hi Mike,</h1>
              <p className="paragraph">welcome back</p>
            </div>
          </div>

          <div className="today-container">
            <p className="today-heading">Today</p>
            <div>
              <h1 className="dollor-19-heading">$19,892</h1>
              <p className="dollor-below-heading">Account Balance</p>
            </div>
            <div className="rupees-in-dollor">
              <div>
                <h1 className="dollor-400-heading">$4,000</h1>
                <p className="dollor-below-heading">
                  Year-toDate-Contributions
                </p>
              </div>
              <div>
                <h1 className="dollor-400-heading">$1,892</h1>
                <p className="dollor-below-heading">Total Interest</p>
              </div>
            </div>
            <button className="want-to-button" type="button">
              I want to
              <span>
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIGQ9Ik0yOS42MDQgMTAuNTI4IDE3LjUzMSAyMy4zNTZhMi4xMDIgMi4xMDIgMCAwIDEtMy4wNjIgMEwyLjM5NiAxMC41MjhjLS45MDctLjk2NC0uMjI0LTIuNTQ2IDEuMS0yLjU0NmgyNS4wMDhjMS4zMjQgMCAyLjAwNyAxLjU4MiAxLjEgMi41NDZ6IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3BhdGg+PC9nPjwvc3ZnPg=="
                  alt="down"
                  className="down-image"
                />
              </span>
            </button>
          </div>

          <div>
            <div className="transaction-bank-container-two-elements">
              <h1 className="transaction-heading">Recent Transactions</h1>
              <div>
                <p className="dollor-below-heading">2020-08-07</p>
                <p className="withdrawal-heading">
                  Withdrawal transfer to Bank-xxx11
                </p>
              </div>
            </div>
            <div className="transaction-bank-container-remaining-elements">
              <div>
                <p className="dollor-below-heading">2020-07-21</p>
                <p className="withdrawal-heading">
                  Withdrawal transfer to Bank-xxx11
                </p>
              </div>
              <div>
                <p className="dollor-below-heading">2020-07-16</p>
                <p className="withdrawal-heading">
                  Withdrawal transfer to Bank-xxx11
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bar-graph-container">
          <div className="icon-image">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PHBhdGggZD0ibTE2IDguNzVhMy43NSAzLjc1IDAgMSAxIDMuNzUtMy43NSAzLjc1NDczIDMuNzU0NzMgMCAwIDEgLTMuNzUgMy43NXptMC02YTIuMjUgMi4yNSAwIDEgMCAyLjI1IDIuMjUgMi4yNTMwOSAyLjI1MzA5IDAgMCAwIC0yLjI1LTIuMjV6IiBmaWxsPSIjN2ZiZGU3Ii8+PGcgZmlsbD0iIzIzMjMyMyI+PHBhdGggZD0ibTE4LjQ2IDE5LjVoLTEyLjkyYTIuNzgyNTYgMi43ODI1NiAwIDAgMSAtMi43NjU2My0yLjQ1MjE1IDMuMjQ5MzMgMy4yNDkzMyAwIDAgMSAtLjAyNDM3LS4zNTc0MiAyLjc2MDQgMi43NjA0IDAgMCAxIC45NDMzNi0yLjA2MTUybC4zNzYtLjMzNzg5YTIuODQ0IDIuODQ0IDAgMCAwIC45MTExMy0xLjYzOTY1bC43ODkwNC00LjczNDM3YTYuMjg5OCA2LjI4OTggMCAwIDEgNS4zODA4Ni01LjIzMDQ3Ljc0OTgxLjc0OTgxIDAgMCAxIC4xOTkyMiAxLjQ4NjMzIDQuNzk4IDQuNzk4IDAgMCAwIC00LjEwMDYxIDMuOTkxMmwtLjc4OSA0LjczOTI2YTQuMzU4NzQgNC4zNTg3NCAwIDAgMSAtMS4zOTI1OCAyLjUwNzgxbC0uMzc2LjMzNzg5YTEuMjYyMiAxLjI2MjIgMCAwIDAgLS40NDE0MS45NDE0MSAxLjc1MDM4IDEuNzUwMzggMCAwIDAgLjAxNTYzLjE4ODQ4IDEuMjc4NjggMS4yNzg2OCAwIDAgMCAxLjI3NDM2IDEuMTIxMDloMTIuOTJhMS4yNzI4OSAxLjI3Mjg5IDAgMCAwIDEuMjc0NDItMS4xNTIzNGMuMDAxLS4wMTA3NS4wMTE3MS0uMDkwODIuMDEyNjktLjEwMTU3YTEuMjk4MzYgMS4yOTgzNiAwIDAgMCAtLjQ1MzEyLTEuMDg0bC0uMjcxNDktLjIyMzYzYTQuMzM4OSA0LjMzODkgMCAwIDEgLTEuNDUyMTktMi41NjE0NmwtLjUxMDc0LTMuMDg1YS43NTAyMy43NTAyMyAwIDAgMSAxLjQ4MDQzLS4yNDQxNWwuNTA5NzYgMy4wODAwOGEyLjgyMDEgMi44MjAxIDAgMCAwIC45Mzg0OCAxLjY2MzA5bC4yNzkzLjIzMDQ2YTIuODE3NzIgMi44MTc3MiAwIDAgMSAuOTY4NzUgMi40MDYyNSAyLjc4ODYgMi43ODg2IDAgMCAxIC0yLjc3NjI5IDIuNTcyMjd6Ii8+PHBhdGggZD0ibTEyIDIyLjc1YTMuNzU0NzMgMy43NTQ3MyAwIDAgMSAtMy43NS0zLjc1di0uMjVhLjc1Ljc1IDAgMCAxIDEuNSAwdi4yNWEyLjI1IDIuMjUgMCAwIDAgNC41IDB2LS4yNWEuNzUuNzUgMCAwIDEgMS41IDB2LjI1YTMuNzU0NzMgMy43NTQ3MyAwIDAgMSAtMy43NSAzLjc1eiIvPjwvZz48L2c+PC9zdmc+"
              alt="notifications"
              className="image-width"
            />
          </div>
          <div>
            <p className="retirement-heading">Retirement Income</p>
            <h1 className="year-starting-heading">Starting Year 2056</h1>
          </div>
          <div className="three-thousand-dollor-container">
            <div>
              <h1 className="dollor-heading">$300,000</h1>
              <p className="goal-paragraph">My Goal</p>
            </div>
            <div>
              <h1 className="dollor-heading">59%</h1>
              <p className="goal-paragraph">Goal Achieved</p>
            </div>
            <div>
              <h1 className="dollor-heading">$300</h1>
              <p className="goal-paragraph">Est. Monthly Income</p>
            </div>
            <div className="two-dollor-container">
              <div>
                <h1 className="dollor-heading">59%</h1>
                <p className="goal-paragraph">Goal Achieved</p>
              </div>
              <div>
                <h1 className="dollor-heading">$300</h1>
                <p className="goal-paragraph">Est. Monthly Income</p>
              </div>
            </div>
          </div>
          <h1 className="contribution-heading">Contribution Overtime</h1>
          <div>
            <ResponsiveContainer width="90%" height={200}>
              <BarChart data={data}>
                <XAxis
                  dataKey="group_name"
                  tick={{
                    stroke: 'gray',
                    strokeWidth: 1,
                  }}
                />
                <YAxis
                  tickFormatter={DataFormatter}
                  tick={{
                    stroke: 'gray',
                    strokeWidth: 0,
                  }}
                />
                <Legend
                  wrapperStyle={{
                    padding: 10,
                  }}
                />
                <Bar
                  dataKey="Employer"
                  name="Employer"
                  fill="#1f77b4"
                  barSize="20%"
                />
                <Bar
                  dataKey="Employee"
                  name="Employee"
                  fill="#fd7f0e"
                  barSize="20%"
                />
                <Bar
                  dataKey="Total_Interest"
                  name="Total Interest"
                  fill="#2b9c2c"
                  barSize="20%"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="compare-container">
            <h1 className="compare-heading">How do I compare to my peers</h1>
            <p className="current-goal-paragraph">
              These numbers represent current goal achievement
            </p>
          </div>
          <div className="pie-chart-container">
            <div className="selects-con">
              <div className="select-container">
                <p>Age:</p>
                <select>
                  <option>Under 30</option>
                </select>
              </div>
              <div className="select-container">
                <p>Age:</p>
                <select>
                  <option>K 20 - K 30</option>
                </select>
              </div>
              <div className="select-container">
                <p>Age:</p>
                <select>
                  <option>Male</option>
                </select>
              </div>
            </div>
            <div className="parent-only-pie-container">
              <div className="only-pie-container">
                <ResponsiveContainer width="100%" height={100}>
                  <PieChart>
                    <Pie
                      cx="50%"
                      cy="70%"
                      data={pieData1}
                      startAngle={0}
                      endAngle={360}
                      innerRadius="50%"
                      outerRadius="70%"
                      dataKey="count"
                    >
                      <Cell name="Telugu" fill="#45b586" />
                      <Cell name="Hindi" fill="#86fce6" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <h1 className="pie-bottom-heading">Average</h1>
              </div>
              <div className="only-pie-container">
                <ResponsiveContainer width="100%" height={100}>
                  <PieChart>
                    <Pie
                      cx="50%"
                      cy="70%"
                      data={pieData2}
                      startAngle={0}
                      endAngle={360}
                      innerRadius="50%"
                      outerRadius="70%"
                      dataKey="count"
                    >
                      <Cell name="Telugu" fill="#45b586" />
                      <Cell name="Hindi" fill="#86fce6" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <h1 className="pie-bottom-heading">Top</h1>
              </div>
              <div className="only-pie-container">
                <ResponsiveContainer width="100%" height={100}>
                  <PieChart>
                    <Pie
                      cx="50%"
                      cy="70%"
                      data={pieData3}
                      startAngle={0}
                      endAngle={360}
                      innerRadius="50%"
                      outerRadius="70%"
                      dataKey="count"
                    >
                      <Cell name="Telugu" fill="#45b586" />
                      <Cell name="Hindi" fill="#86fce6" />
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <h1 className="pie-bottom-heading">Me</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="final-container">
          <div className="child-final-container">
            <div className="compare2-container">
              <h1 className="compare-heading">How do I compare to my peers</h1>
              <p className="current-goal-paragraph">
                These numbers represent current goal achievement
              </p>
            </div>
            <div className="pie-chart-container2">
              <div className="selects-con">
                <div className="select-container">
                  <p>Age:</p>
                  <select>
                    <option>Under 30</option>
                  </select>
                </div>
                <div className="select-container">
                  <p>Age:</p>
                  <select>
                    <option>K 20 - K 30</option>
                  </select>
                </div>
                <div className="select-container">
                  <p>Age:</p>
                  <select>
                    <option>Male</option>
                  </select>
                </div>
              </div>
              <div className="parent-only-pie-container">
                <div className="only-pie-container">
                  <ResponsiveContainer width="100%" height={100}>
                    <PieChart>
                      <Pie
                        cx="50%"
                        cy="70%"
                        data={pieData1}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="50%"
                        outerRadius="100%"
                        dataKey="count"
                      >
                        <Cell name="Telugu" fill="#45b586" />
                        <Cell name="Hindi" fill="#86fce6" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <h1 className="pie-bottom-heading">Average</h1>
                </div>
                <div className="only-pie-container">
                  <ResponsiveContainer width="100%" height={100}>
                    <PieChart>
                      <Pie
                        cx="50%"
                        cy="70%"
                        data={pieData2}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="50%"
                        outerRadius="100%"
                        dataKey="count"
                      >
                        <Cell name="Telugu" fill="#45b586" />
                        <Cell name="Hindi" fill="#86fce6" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <h1 className="pie-bottom-heading">Top</h1>
                </div>
                <div className="only-pie-container">
                  <ResponsiveContainer width="100%" height={100}>
                    <PieChart>
                      <Pie
                        cx="50%"
                        cy="70%"
                        data={pieData3}
                        startAngle={0}
                        endAngle={360}
                        innerRadius="50%"
                        outerRadius="100%"
                        dataKey="count"
                      >
                        <Cell name="Telugu" fill="#45b586" />
                        <Cell name="Hindi" fill="#86fce6" />
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <h1 className="pie-bottom-heading">Me</h1>
                </div>
              </div>
            </div>

            <div>
              <h1 className="retirement-strategy-heading">
                Retirement Strategy
              </h1>
              <p>Employee Contribution</p>
              <p>Retirement Age</p>
            </div>
            <div className="update-button-container">
              <div className="employer-contribution-container">
                <h1 className="employer-interest-heading">
                  Employer Contribution
                </h1>
                <p className="employer-interest-heading">8.4%</p>
              </div>
              <div className="employer-contribution-container">
                <h1 className="employer-interest-heading">Interest Rate</h1>
                <p className="employer-interest-heading">5%</p>
              </div>
              <button type="button" className="update-button">
                Update
              </button>
              <div className="button-bottom-container">
                <h1>View Help Docs </h1>
              </div>
            </div>
          </div>

          <div className="housing-container">
            <div>
              <h1 className="housing-heading">
                Are you considering a{' '}
                <span className="housing-sub-heading">Housing Advance?</span>
              </h1>
              <p className="limited-paragraph">
                Limited time reduced interest.
              </p>
              <p className="learn-more">Learn More</p>
            </div>
          </div>
        </div>
      </div>

      <div className="icons-bottom-container-sm">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MTIiIGhlaWdodD0i
          NTEyIiB4PSIwIiB5PSIwIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxyZWN0IHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzM3NDJkMyIgcng9IjE
          wIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIj48L3JlY3Q+PGcgZmlsbD0iI2ZmZiIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNi43OTggMTAuMTI1YTEuMjIyIDEuMjIyIDAgMCAwLTEuNTkgMGwtNC4wNzIgMy40OWMtLjI3MS4yMzMtLjQyNy41NzItLjQyNy45Mjh2Ny4zOTZjMCAuNjc1LjU0NyAxLjIyMiAxLjIyMiAxLjIyMmg4LjE0NWMuNjc0IDAgMS4yMjEtLjU0NyAxLjIyMS0xLjIyMnYtNy4zOTZjMC0uMzU2LS4xNTUtLjY5NS0uNDI2LS45Mjd6bS0yLjEyLS42MThhMi4wMzYgMi4wMzYgMCAwIDEgMi42NSAwbDQuMDczIDMuNDljLjQ1MS4zODcuNzEuOTUyLjcxIDEuNTQ2djcuMzk2YTIuMDM2IDIuMDM2IDAgMCAxLTIuMDM1IDIuMDM2SDExLjkzYTIuMDM2IDIuMDM2IDAgMCAxLTIuMDM2LTIuMDM2di03LjM5NmMwLS41OTQuMjYtMS4xNTkuNzEtMS41NDV6IiBmaWxsPSIjZmZmZmZmIiBvcGFjaXR5PSIxIiBkYXRhLW9yaWdpbmFsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTE2Ljc4NyAxMC4xMDJhMS4yMjIgMS4yMjIgMCAwIDAtMS41NzQgMGwtNi4zNzcgNS4zN2EuNDA3LjQwNyAwIDEgMS0uNTI0LS42MjNsNi4zNzYtNS4zN2EyLjAzNiAyLjAzNiAwIDAgMSAyLjYyNCAwbDYuMzc3IDUuMzdhLjQwNy40MDcgMCAxIDEtLjUyNS42MjN6TTE1LjU5IDE3LjQ2Yy0uNjc0IDAtMS4yMi41NDctMS4yMiAxLjIyMnYyLjg1YS40MDcuNDA3IDAgMCAxLS44MTUgMHYtMi44
          NWMwLTEuMTI1LjkxMS0yLjAzNiAyLjAzNi0yLjAzNmguODE0YzEuMTI1IDAgMi4wMzcuOTExIDIuMDM3IDIuMDM2djIuODVhLjQwNy40MDcgMCAxIDEtLjgxNSAwdi0yLjg1YzAtLjY3NS0uNTQ3LTEuMjIyLTEuMjIyLTEuMjIyeiIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMSIgZGF0YS1vcmlnaW5hbD0iI2ZmZmZmZiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
          alt="home"
          className="image-width"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgaGVpZ2h0PSI1MTIiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIyIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHdpZHRoPSI1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTMwLjc1NCA3LjgzOWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMjZjLS43MyAwLTEuNDI5LjI5LTEuOTQ1LjgwNnMtLjgwNSAxLjIxNS0uODA1IDEuOTQ0djE3LjAyM2MwIC43MjkuMjg5IDEuNDI4LjgwNSAxLjk0NHMxLjIxNS44MDYgMS45NDUuODA2aDI0Yy43MjkgMCAxLjQyOC0uMjkgMS45NDQtLjgwNnMuODA2LTEuMjE1LjgwNi0xLjk0NGMwLTUuMjUgMC0xOS4wMjMgMC0xOS4wMjN6bS0xLjUuNzV2MTguMjczYzAgLjMzMS0uMTMyLjY0OS0uMzY2Ljg4My0uMjM1LjIzNS0uNTUzLjM2Ny0uODg0LjM2N2gtMjRjLS4zMzIgMC0uNjUtLjEzMi0uODg0LS4zNjctLjIzNS0uMjM0LS4zNjYtLjU1Mi0uMzY2LS44ODMgMC00LjAxNCAwLTEzLjAwOSAwLTE3LjAyMyAwLS4zMzEuMTMxLS42NDkuMzY2LS44ODMuMjM0LS4yMzUuNTUyLS4zNjcuODg0LS4zNjd6Ii8+PHBhdGggZD0ibTIuMDA0IDI1LjcyaDI4Yy40MTQgMCAuNzUtLjMzNy43NS0uNzUgMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTI4Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzUgMCAuNDEzLjMzNi43NS43NS43NXoiLz48cGF0aCBkPSJtMzAuNzU0IDcuODM5di0yLjQ4OWMwLTEuNTE4LTEuMjMyLTIuNzUtMi43NS0yLjc1LTMuMTE1IDAtOS4wODEgMC0xMi4xMzIgMC0uNzAzIDAtMS4zNzcuMjgtMS44NzQuNzc2LS40OTYuNDk3LS43NzYgMS4xNzEtLjc3NiAxLjg3NHYyLjU4OWMwIC40MTUuMzM2Ljc1Ljc1Ljc1aDE2LjAzMmMuNDE0IDAgLjc1LS4zMzUuNzUtLjc1em0tMS41LTIuNDg5djEuNzM5aC0xNC41MzJ2LTEuODM5YzAtLjMwNS4xMjEtLjU5Ny4zMzctLjgxMy4yMTYtLjIxNS41MDgtLjMzNy44MTMtLjMzN2gxMi4xMzJjLjY5IDAgMS4yNS41NiAxLjI1IDEuMjV6Ii8+PHBhdGggZD0ibTE0LjcyMiA0Ljk4MmMwLS40MTQtLjMzNS0uNzUtLjc1LS43NWgtNC43MzNjLS43MTkgMC0xLjQwOS4yODYtMS45MTcuNzk0LS41MDkuNTA5LS43OTQgMS4xOTgtLjc5NCAxLjkxN3YuODg1cy43NS43NjEuNzUuNzYxaDYuNjk0Yy40MTUgMCAuNzUtLjMzNS43NS0uNzV6bS02LjY5NCAyLjEwN3YtLjE0NmMwLS4zMjEuMTI3LS42MjkuMzU0LS44NTZzLjUzNS0uMzU1Ljg1Ny0uMzU1aDMuOTgzdjEuMzU3eiIvPjxwYXRoIGQ9Im0xNi4xNTggMTEuMTM4Yy0uMTAyLjAxOS0uMjA3LjAxOS0uMzA5IDAgMCAwLTQuNzc2LS45MjItNC43NzYtLjkyMi0uNTg1LS4xMTMtMS4xOTEuMDQxLTEuNjUxLjQyMXMtLjcyNy45NDUtLjcyNyAxLjU0MnY3LjQzMmMwIC45NTguNjggMS43ODEgMS42MiAxLjk2M2w1LjI1IDEuMDE0Yy4yOS4wNTYuNTg4LjA1Ni44NzggMGw1LjI0OS0xLjAxNGMuOTQxLS4xODIgMS42Mi0xLjAwNSAxLjYyLTEuOTYzdi03LjQzMmMwLS41OTctLjI2Ni0xLjE2Mi0uNzI2LTEuNTQyLS40NjEtLjM4LTEuMDY2LS41MzQtMS42NTItLjQyMXptLjI4NSAxLjQ3MyA0Ljc3NS0uOTIzYy4xNDctLjAyOC4yOTguMDExLjQxMy4xMDYuMTE1LjA5NC4xODEuMjM2LjE4MS4zODV2Ny40MzJjMCAuMjM5LS4xNy40NDUtLjQwNC40OWwtNS4yNSAxLjAxNGMtLjEwMi4wMTktLjIwNy4wMTktLjMwOSAwIDAgMC01LjI0OS0xLjAxNC01LjI0OS0xLjAxNC0uMjM1LS4wNDUtLjQwNS0uMjUxLS40MDUtLjQ5di03LjQzMmMwLS4xNDkuMDY3LS4yOTEuMTgxLS4zODUuMTE1LS4wOTUuMjY3LS4xMzQuNDEzLS4xMDZsNC43NzYuOTIzYy4yOS4wNTYuNTg4LjA1Ni44NzggMHoiLz48cGF0aCBkPSJtMTEuNTIgMTQuOTk5IDIuNTE2LjQ4NWMuNDA2LjA3OS44LS4xODcuODc5LS41OTQuMDc4LS40MDYtLjE4OC0uOC0uNTk1LS44NzhsLTIuNTE1LS40ODZjLS40MDctLjA3OS0uOC4xODgtLjg3OS41OTQtLjA3OC40MDYuMTg4LjguNTk0Ljg3OXoiLz48cGF0aCBkPSJtMjAuMzUxIDEzLjUyNi0yLjQ5OC40ODJjLS40MDcuMDc5LS42NzMuNDcyLS41OTQuODc5LjA3OC40MDYuNDcyLjY3Mi44NzguNTk0bDIuNDk4LS40ODJjLjQwNy0uMDc5LjY3My0uNDczLjU5NS0uODc5LS4wNzktLjQwNi0uNDczLS42NzMtLjg3OS0uNTk0eiIvPjxwYXRoIGQ9Im0xMS41MiAxOC40MyAyLjUxNi40ODZjLjQwNi4wNzguOC0uMTg4Ljg3OS0uNTk1LjA3OC0uNDA2LS4xODgtLjgtLjU5NS0uODc4bC0yLjUxNS0uNDg2Yy0uNDA3LS4wNzgtLjguMTg4LS44NzkuNTk0LS4wNzguNDA3LjE4OC44LjU5NC44Nzl6Ii8+PHBhdGggZD0ibTIwLjM1MSAxNi45NTctMi40OTguNDgyYy0uNDA3LjA3OS0uNjczLjQ3My0uNTk0Ljg3OS4wNzguNDA2LjQ3Mi42NzMuODc4LjU5NGwyLjQ5OC0uNDgyYy40MDctLjA3OS42NzMtLjQ3Mi41OTUtLjg3OS0uMDc5LS40MDYtLjQ3My0uNjcyLS44NzktLjU5NHoiLz48L3N2Zz4="
          alt="file and folder"
          className="image-width"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnNyIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS1taXRlcmxpbWl0PSIyIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGlkPSJwYXRoMzY4MyIgZD0ibTE0LjAwOSAzLjk5OWMtMS41OSAwLTMuMTE1LjYzMy00LjI0IDEuNzU4LTEuMTI0IDEuMTI0LTEuNzU4IDIuNjU3LTEuNzU4IDQuMjQ4djQzLjk5NWMwIDEuNTkxLjYzNCAzLjEyNCAxLjc1OCA0LjI0OCAxLjEyNSAxLjEyNSAyLjY1IDEuNzU4IDQuMjQgMS43NThoMzYuMDA0YzEuNTkxIDAgMy4xMjQtLjYzMyA0LjI0OC0xLjc1OCAxLjEyNS0xLjEyNCAxLjc1LTIuNjU3IDEuNzUtNC4yNDh2LTQzLjk5NWMwLTEuNTkxLS42MjUtMy4xMjQtMS43NS00LjI0OC0xLjEyNC0xLjEyNS0yLjY1Ny0xLjc1OC00LjI0OC0xLjc1OGgtMzYuMDA0em0wIDQuMDA0aDM2LjAwNGMuNTM0IDAgMS4wNC4yMSAxLjQxNi41ODYuMzc1LjM3NS41ODYuODgxLjU4NiAxLjQxNnY0My45OTVjMCAuNTM1LS4yMTEgMS4wNDEtLjU4NiAxLjQxNi0uMzc1LjM3Ni0uODgyLjU4Ni0xLjQxNi41ODZoLTM2LjAwNGMtLjUzNCAwLTEuMDMyLS4yMS0xLjQwOC0uNTg2LS4zNzUtLjM3NS0uNTg2LS44ODEtLjU4Ni0xLjQxNnYtNDMuOTk1YzAtLjUzNS4yMTEtMS4wNDEuNTg2LTEuNDE2LjM3Ni0uMzc2Ljg3NC0uNTg2IDEuNDA4LS41ODZ6Ii8+PHBhdGggaWQ9InBhdGgzNjc5IiBkPSJtMjUuMDEyIDE4LjAwNWMtMS4wOTUtLjAwMS0xLjk5OC44OTgtMi4wMDIgMS45OTR2LjAwMWMwIDEuMDk4LjkwMyAyLjAwMSAyIDIuMDAxaDE0LjAwMmMxLjA5NyAwIDItLjkwMyAyLTIuMDAxdi0uMDAxYy0uMDAzLTEuMDk2LS45MDYtMS45OTUtMi4wMDItMS45OTR6Ii8+PHBhdGggaWQ9InBhdGgzNjc1IiBkPSJtMjUuMDEyIDMwcy0uMDAxIDAtLjAwMiAwYy0xLjA5NyAwLTIgLjkwMy0yIDJ2LjAwNGMwIDEuMDk4LjkwMyAyIDIgMmgxNC4wMDJjMS4wOTcgMCAyLS45MDIgMi0ydi0uMDA0YzAtMS4wOTctLjkwMy0yLTItMi0uMDAxIDAtLjAwMSAwLS4wMDIgMHoiLz48cGF0aCBpZD0icGF0aDM2NzEiIGQ9Im0yNS4wMTIgNDIuMDA0cy0uMDAxIDAtLjAwMiAwYy0xLjA5NyAwLTIgLjkwMy0yIDJ2LjAwMmMuMDA0IDEuMDk2LjkwNyAxLjk5NSAyLjAwMiAxLjk5NGgxMy45OThjMS4wOTYuMDAxIDEuOTk5LS44OTggMi4wMDItMS45OTQgMCAwIDAtLjAwMSAwLS4wMDIgMC0xLjA5Ny0uOTAzLTItMi0yLS4wMDEgMC0uMDAxIDAtLjAwMiAweiIvPjwvc3ZnPg=="
          alt="note"
          className="image-width"
        />
        <img
          src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDBjLTc0LjQzOSwwLTEzNSw2MC41NjEtMTM1LDEzNXM2MC41NjEsMTM1LDEzNSwxMzVzMTM1LTYwLjU2MSwxMzUtMTM1UzMzMC40MzksMCwyNTYsMHogTTI1NiwyNDANCgkJCWMtNTcuODk3LDAtMTA1LTQ3LjEwMy0xMDUtMTA1YzAtNTcuODk3LDQ3LjEwMy0xMDUsMTA1LTEwNWM1Ny44OTcsMCwxMDUsNDcuMTAzLDEwNSwxMDVDMzYxLDE5Mi44OTcsMzEzLjg5NywyNDAsMjU2LDI0MHoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQyMy45NjYsMzU4LjE5NUMzODcuMDA2LDMyMC42NjcsMzM4LjAwOSwzMDAsMjg2LDMwMGgtNjBjLTUyLjAwOCwwLTEwMS4wMDYsMjAuNjY3LTEzNy45NjYsNTguMTk1DQoJCQlDNTEuMjU1LDM5NS41MzksMzEsNDQ0LjgzMywzMSw0OTdjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWg0MjBjOC4yODQsMCwxNS02LjcxNiwxNS0xNQ0KCQkJQzQ4MSw0NDQuODMzLDQ2MC43NDUsMzk1LjUzOSw0MjMuOTY2LDM1OC4xOTV6IE02MS42Niw0ODJjNy41MTUtODUuMDg2LDc4LjM1MS0xNTIsMTY0LjM0LTE1Mmg2MA0KCQkJYzg1Ljk4OSwwLDE1Ni44MjUsNjYuOTE0LDE2NC4zNCwxNTJINjEuNjZ6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
          alt="profile"
          className="image-width"
        />
        <img
          src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDY0IDY0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJfMThfc2VhcmNoIiBkYXRhLW5hbWU9IjE4IHNlYXJjaCI+PHBhdGggZD0ibTQ1LjY3MyAyNS4wOWEyMC40NTkgMjAuNDU5IDAgMCAxIC0yLjc3MyAxMC4zMjcgMTguNjE1IDE4LjYxNSAwIDAgMSAtMS4wNzEgMS42NXYuMDFhMjIuMDI3IDIyLjAyNyAwIDAgMSAtMi4xOTEgMi41NjcgMjEuMTg5IDIxLjE4OSAwIDAgMSAtMi41NzcgMi4xOTEgMTcuODY3IDE3Ljg2NyAwIDAgMSAtMS42NiAxLjA3MSAyMC42MzkgMjAuNjM5IDAgMSAxIDEwLjI3Mi0xNy44MTZ6IiBmaWxsPSIjZGNkZmUwIi8+PHBhdGggZD0ibTM1LjAxOCAzNS4wMjFhMTQuMDQ4IDE0LjA0OCAwIDEgMSAwLTE5Ljg3MiAxMy45NTIgMTMuOTUyIDAgMCAxIDAgMTkuODcyeiIgZmlsbD0iI2ZjZmRmZiIvPjxwYXRoIGQ9Im01Ny45NTkgNTcuOTUzYTUuMzM2IDUuMzM2IDAgMCAxIC03LjUwOCAwbC0xNS4wNTEtMTUuMDQ3YTE3Ljg2NyAxNy44NjcgMCAwIDAgMS42Ni0xLjA3MSAyMS4xODkgMjEuMTg5IDAgMCAwIDIuNTc3LTIuMTkxIDIyLjAyNyAyMi4wMjcgMCAwIDAgMi4xOTEtMi41Njd2LS4wMWExOC42MTUgMTguNjE1IDAgMCAwIDEuMDcxLTEuNjVsMTUuMDUxIDE1LjAzN2E1LjMyMSA1LjMyMSAwIDAgMSAuMDA5IDcuNDk5eiIgZmlsbD0iI2MyYzJjMyIvPjwvZz48L3N2Zz4="
          alt="search"
          className="image-width"
        />
      </div>
    </div>
  )
}

export default App
