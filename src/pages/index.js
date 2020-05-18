import React, { PureComponent } from 'react'
import Redirect from 'umi/redirect'
import { withI18n } from '@lingui/react'

@withI18n()
class Index extends PureComponent {
  render() {
    console.log('index加载');
    const { i18n } = this.props
    return <Redirect to={i18n.t`/dashboard`} />
  }
}

export default Index
