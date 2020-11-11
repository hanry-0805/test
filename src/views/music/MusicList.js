import React from 'react'

import { fetchQQ } from '@/utils/api'

import { TestRouter, Child1 } from '@/components'

export default class MusicList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  componentDidMount() {
    const str  = 'ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=54758256079627899&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk_new_20200303=5381&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
    function handle(str) {
      let obj = {}
      str.split('&').map(ele=>{
        let arr = ele.split('=')
        obj[arr[0]] = arr[1]
      })
      return obj
    }
    const params = handle(str)
    params.w = '周杰伦'
    fetchQQ(params).then(res=>{
      console.log('res', res)
      this.setState({
        list: res.song.list
      })
    })
  }
  // 跳转到详情页
  skipToDetail(ele) {
    console.log('ele', ele)
    // 编程式路由导航
    // 动态路由来实现路由传参
    this.props.history.push('/music/detail/'+ele.id+'/'+ele.name)
  }
  render() {
    let { list } = this.state
    return (
      <div>
        <h1>测试axios</h1>
        {/*音乐列表*/}
        {
          list.map(ele=>(
            <div key={ele.id} onClick={this.skipToDetail.bind(this, ele)}>
              <span>{ele.title}</span>
            </div>
          ))
        }
        <hr/>
        <TestRouter />
        <Child1 />
      </div>
    )
  }
}
