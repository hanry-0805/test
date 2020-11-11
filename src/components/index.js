import loadable from '@loadable/component'

const TestRouter = loadable(()=>import('./TestRouter'))

import Child1 from './Child1'
import Radio from './common/Radio'
import Checkbox from './common/Checkbox'
import Modal from './common/Modal'
import Child2 from './Child2'
import Child3 from './Child3'


export {
  Child1,
  Radio,
  Checkbox,
  Modal,
  Child2,
  Child3,
  TestRouter
}
