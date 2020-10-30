/*
 * @Author: your name
 * @Date: 2020-10-24 21:55:20
 * @LastEditTime: 2020-10-30 23:55:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /sunnercms-nextJsBlog/components/HotPages/index.js
 */
import React, { Component } from 'react';
import styles from './index.module.less';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { message } from 'antd';
// import 'antd/dist/antd.css'; 

class HotPages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'https://sunzhaoxiang.blog.csdn.net/'
    }
  }

  copyLinkHandle = () => {
    console.log('object', 1111)
  }

  onCopyCallBack = () => {
    message.success('链接复制成功',0.6);
  }

  render() {
    return (
      <div className={styles.hotPagesContainer}>
        <h1>热门文章</h1>
        <div className={styles.titleDesc}>
          欢迎阅读、收藏、分享热门文章
          {/* <br/>
          昨夜的那场电影,还有我的心情. */}
        </div>
        <div className={styles.contents}>
          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <CopyToClipboard text={this.state.value} onCopy={this.onCopyCallBack}>
                <div className={ `${styles.imgMask} ${styles.sweepToBottom}`} onClick={this.copyLinkHandle}>
                  <i className="iconfont icon-fuzhilianjie"></i>
                </div>
              </CopyToClipboard>
              <img
                src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3155886573,2573739945&fm=26&gp=0.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>新增qq应用</div>
              <div className={styles.itemDate}>2019年12月24日</div>
              <p className={styles.itemDesc}>
                激发了房间里的卷发简法定放假啊老骥伏枥的减肥 u 让卷发短款礼服发发呆了卷发短款两间房单就发儿啊就发来的附加费阿迪风景
              </p>
              <div className={styles.readMore}>阅读更多</div>
            </div>
          </div>

          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <CopyToClipboard text={this.state.value} onCopy={this.onCopyCallBack}>
                <div className={ `${styles.imgMask} ${styles.sweepToBottom}`} onClick={this.copyLinkHandle}>
                  <i className="iconfont icon-fuzhilianjie"></i>
                </div>
              </CopyToClipboard>
              <img
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1603651196522&di=a16700caf33d74f13f72dc94aeb6bdaf&imgtype=0&src=http%3A%2F%2Fimg.yuntiy.com%2Fillustration%2F1535098791991.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>新增qq应用</div>
              <div className={styles.itemDate}>2019年12月24日</div>
              <p className={styles.itemDesc}>
                激发了房间里的卷发简法定放假啊老骥伏枥的减肥 u 让卷发短款礼服发发呆了卷发短款两间房单就发儿啊就发来的附加费阿迪风景
              </p>
              <div className={styles.readMore}>阅读更多</div>
            </div>
          </div>


          <div className={styles.contentItem}>
            <div className={styles.imgContainer}>
              <CopyToClipboard text={this.state.value} onCopy={this.onCopyCallBack}>
                <div className={ `${styles.imgMask} ${styles.sweepToBottom}`} onClick={this.copyLinkHandle}>
                  <i className="iconfont icon-fuzhilianjie"></i>
                </div>
              </CopyToClipboard>
              <img
                src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=389917905,3016311303&fm=26&gp=0.jpg"
                className={styles.itemImage}
              />
            </div>
            <div className={styles.itemInfo}>
              <div className={styles.itemName}>新增qq应用</div>
              <div className={styles.itemDate}>2019年12月24日</div>
              <p className={styles.itemDesc}>
                激发了房间里的卷发简法定放假啊老骥伏枥的减肥 u 让卷发短款礼服发发呆了卷发短款两间房单就发儿啊就发来的附加费阿迪风景
              </p>
              <div className={styles.readMore}>阅读更多</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotPages;