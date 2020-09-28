import React from 'react'
import './user-profile.styles.scss'


import { connect } from 'react-redux'

const UserProfile = ({ currentUser: props }) => (
    
    <div>
      {
        props ?
            <div>
              <h1 className="username">{ props.currentUser.displayName }</h1>
              <h3 className="email">{ props.currentUser.email }</h3>
            </div>
            :
            <div> No user was found </div>
      }
      {
        console.log(props)
      }
    </div>
)


const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(UserProfile)