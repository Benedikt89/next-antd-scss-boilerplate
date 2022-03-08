import {Layout} from 'antd';

import HeaderNavigator from '@Components/layout/header/headerNavigator';
import styles from '@Components/layout/appLayout.module.scss';

const {Content} = Layout;

const AppLayout = ({children}) => (
  <Layout className={styles.appLayout}>
    <HeaderNavigator/>
    <Content className={styles.contentPage}>
      {children}
    </Content>
  </Layout>
);

export default AppLayout;
