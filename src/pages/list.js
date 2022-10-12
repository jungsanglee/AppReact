import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SIGN_OUT } from '../store/actionTypes';


class List extends React.Component {
  static propTypes = {
    signOut: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
  };
  
    toggleModal = () => {
      this.setState(state => {
        return { showModal: !state.showModal };
      });
    };
  
    handlerChangeModalProp = e => {
      const { id, value, type, checked } = e.target;
      const newValue = type === 'checkbox' ? checked : value;
      this.setState({ [id]: newValue });
    };

  render() {
      
    return (
      <div>
        <div className='list header'>
          <h1>List</h1>
        </div>
        <table id="Table" className='table table-bordered'>
                                <tr>
                     <th>ID</th>
                     <th>Дата</th>
                     <th>User</th>
                     <th>Pic</th>
                     <th>Описание</th>
                     <th></th>
                 </tr>
                <tr>
                <td>1</td>
                <td>12.10.2022</td>
                <td>{this.props.username}</td>
                <td><img className='pic1' src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/users-icon.png"></img></td>
                <td>Текст</td>
                <td><button className='app__button' onClick={this.toggleModal}> Отписаться</button></td>
                </tr>
                <tr>
                <td>2</td>
                <td>12.10.2022</td>
                <td>{this.props.username}</td>
                <td><img className='pic1' src="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/256/users-icon.png"></img></td>
                <td>Текст</td>
                <td><button className='app__button' onClick={this.toggleModal}> Отписаться</button></td>
                </tr>
                </table>
                   
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

export default connect(mapStateToProps, mapDispatchToProps)(List);
