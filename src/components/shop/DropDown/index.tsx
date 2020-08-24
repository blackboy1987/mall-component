import React from 'react';
import styles from './index.less';

const DropDown: React.FC<{}> = () => {
  return (
    <div className={styles.dropdown}>
      <a>
        商家服务
        <span className="caret" />
      </a>
      <ul className="business">
        <li>
          <a href="/business/index" target="_blank">商家中心</a>
        </li>
        <li>
          <a href="/business/register">商家入驻</a>
        </li>
      </ul>
    </div>
  );
}

export default DropDown;
