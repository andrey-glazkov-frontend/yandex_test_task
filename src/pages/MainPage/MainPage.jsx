import { Detail } from '../../components/Detail/Detail'
import { TaskOne } from '../../components/TaskOne/TaskOne'
import { TaskTwo } from '../../components/TaskTwo/TaskTwo'
import { TextBlock } from '../../components/TextBlock/TextBlock'
import stylesMain from './mainPage.module.css'

export function MainPage() {
  return (
    <div className={stylesMain.containerMain}>
      <div className={stylesMain.container}>
        <Detail />
        <TextBlock />
      </div>
      <div className={stylesMain.columnContainer}>
        <TaskOne />
        <TaskTwo />
      </div>
    </div>
  )
}
