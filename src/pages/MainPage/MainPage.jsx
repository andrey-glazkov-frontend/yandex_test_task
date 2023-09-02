import { Detail } from '../../components/Detail/Detail'
import { TextBlock } from '../../components/TextBlock/TextBlock'
import stylesMain from './mainPage.module.css'

export function MainPage() {
  return (
    <div className={stylesMain.container}>
      <Detail />
      <TextBlock />
    </div>
  )
}
