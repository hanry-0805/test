import React from 'react'

// React表单，默认是单向绑定

// 受控表单：表单的输入和输出由state声明式变量来控制
// 非受控表单：表单的输入和输出与state没有任何关系
// 在工作中，一定要使用受控表单，尽量不要使用非受控表单，除了文件上传类表单

// 在受控表单中，value/checked 和 onChange 是一起使用的，缺一不可。


let dVal = 'lisi'  // 给input赋初始值
let val = ''       // 用于取值

export default class TestForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: '',
      pass: '',
      desc: '我是个好人',
      gender: 1,
      agree: false,
      gradeArr: [
        { id: 1, label: '高中' },
        { id: 2, label: '大专' },
        { id: 3, label: '本科' },
        { id: 4, label: '硕士' }
      ],
      grade: 4
    }
  }

  inputHandle(e) {
    val = e.target.value
  }
  submit() {
    const data = {
      user: val,
      pass: document.getElementById('pass').value,
      mobi: this.refs.pass.value
    }
    console.log('非受控表单取值并提交', data)
  }


  change(key, e) {
    // 当checkbox和radio不分组时，我们一般使用e.target.checked取值，是布尔类型
    // 当checkbox和radio分组时，我们一般使用e.target.value来取值，是字符串类型
    console.log(e.target.checked, e.target.value)
    // 手动取表单的值，手动更新到state中去
    if (key=='agree') {
      this.setState({[key]: e.target.checked})
    } else {
      this.setState({[key]: e.target.value})
    }
  }

  submitAll() {
    console.log('受控表单取值并提交', this.state)
  }

  render() {
    let { user, pass, desc, gender, agree, gradeArr, grade } = this.state
    return (
      <div>
        <h1>测试表单绑定</h1>

        {/*非受控表单*/}
        <input type="text" defaultValue={dVal} onInput={this.inputHandle.bind(this)} />
        <input id='pass' type="text"/>
        <input ref='pass' type="text"/>
        <input type="file" />
        <button onClick={this.submit.bind(this)}>提交</button>
        <hr/>

        {/*受控表单*/}
        <div>
          <span>用户名：</span>
          <input
            type="text"
            value={user}
            onChange={this.change.bind(this,'user')}
          />
        </div>
        
        <div>
          <span>密 码：</span>
          <input
            type="password"
            value={pass}
            onChange={this.change.bind(this,'pass')}
          />
        </div>

        <div>
          <span>个人简介：</span>
          <textarea
            value={desc}
            onChange={this.change.bind(this,'desc')}
            cols="30"
            rows="3">
          </textarea>
        </div>

        <div>
          {/*name属性的作用，把一系列互不相关的radio表单变成一组*/}
          {/*value用于给每个radio一个值，在e.target.value可以取到它*/}
          {/*checked用于表单受控*/}
          <span>选择性别：</span>
          <input
            type="radio"
            name='gender'
            value='1'
            checked={gender==1}
            onChange={this.change.bind(this,'gender')}
          />
          <label>男</label>
          <input
            type="radio"
            name='gender'
            value='2'
            checked={gender==2}
            onChange={this.change.bind(this,'gender')}
          />
          <label>女</label>
        </div>

        <div>
          <span>选择学历：</span>
          <select value={grade} onChange={this.change.bind(this, 'grade')}>
            {
              gradeArr.map(ele=>(
                <option
                  key={ele.id}
                  value={ele.id}
                >
                  {ele.label}
                </option>
              ))
            }
          </select>
        </div>

        <div>
          <input type="checkbox" checked={agree} onChange={this.change.bind(this,'agree')}/>
          <label>是否同意该注册协议</label>
        </div>

        <button onClick={this.submitAll.bind(this)}>提交</button>
      </div>
    )
  }
}
