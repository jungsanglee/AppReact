import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_OUT } from '../store/actionTypes';


class Profile extends React.Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className='row' id='real-estates-detail'>
      <div className='col-lg-4 col-md-4 col-xs-12'>
      <div className='panel panel-default'>
 <div className='panel-heading'>
 <header className='panel-title'>
 <div className='text-center'>
 <strong>Профиль</strong>
 </div>
 </header>
 </div>
 <div className='panel-body'>
 <div className='text-center' id="author">
 <img src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/users-icon.png"></img>
 <h3>{this.props.username}</h3>
 <small className='label label-warning'>Российская Федерация</small>
 </div>
 </div>
 </div>
 </div>
 <div className='col-lg-8 col-md-8 col-xs-12'>
 <div className='panel'>
 <div className='panel-body'>
 <ul id="myTab" className='nav nav-pills'>
      <li class="active"><a href="#" data-toggle="tab">Рекдактировать профиль</a></li>
      <button onClick={this.signOut}>Выйти</button>
 </ul>
 <div id="myTabContent" className='tab-content'>
 <div className='tab-pane fade active in' id="detail">
 <h4>История профиля</h4>
 <table className='table table-th-block'>
 <tbody>
 <tr><td className='active'>Зарегистрирован:</td><td>12-10-2022</td></tr>
 <tr><td className='active'>Последняя активность:</td><td>12-10-2022 / 09:11</td></tr>
 <tr><td className='active'>Страна:</td><td>Россия</td></tr>
 <tr><td className='active'>Город:</td><td>Москва</td></tr>
 <tr><td className='active'>Пол:</td><td>Мужской</td></tr>
 <tr><td className='active'>Полных лет:</td><td>25</td></tr>
 </tbody>
 </table>
 </div>
 </div>
 </div>
 </div>
 </div>
 </div>
    );
  }

  signOut = () => {
    this.props.signOut();
  };
}

const mapStateToProps = (state) => (
  {
    username: state.username
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    signOut: () => dispatch({ type: SIGN_OUT })
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
