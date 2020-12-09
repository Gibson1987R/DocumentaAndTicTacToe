import React from 'react';
import UserInfo from './UserInfo';

function formatDate(date) {
  return date.toLocaleDateString();
}

// ------Primera versión sin extrer ningún componente
// function Extraccion(props) {
//   return(
//     <div className="Comment">
//       <div className="UserInfo">
//         <img 
//         src={props.author.avatarUrl}
//         alt={props.author.name}
//         className="Avatar"
//         />
//       <div className="UserInfo-Name">
//         {props.author.name}
//       </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   )
// }

// ----- Segunda versión con extracción de componente Avatar


// function Avatar (props) {
//   return(
//     <img src={props.user.avatarUrl} 
//     alt={props.user.name} // la resive de su padre en user
//     className="Avatar"/>
//   )
// }

// function Extraccion(props) {
//   return(
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar
//         user={props.author} 
//         // acá el padre da user a Avatar
//         />
//         <div className="UserInfo-Name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   )
// }

// ----- Tercera versión con extracción de componente UserInfo 


// function Avatar (props) {
//   return(
//     <img src={props.user.avatarUrl} 
//     alt={props.user.name} // Recibiendo en el hijo
//     className="Avatar"/>
//   )
// }

// function UserInfo(props) {
//   return(
//     <div className="UserInfo">
//       <Avatar
//       user={props.user}
//       />
//       <div className="UserInfo-name">
//       {props.user.name}    {/* Recibiendo del padre  */}
//       </div>
//     </div>
//   )
// }

// function Extraccion(props) {
//   return(
//     <div className="Comment">
//       <UserInfo 
//       user = {props.author} //Recibiendo del abuelo
//       />
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   )
// }


// ----- Cuarta versión con extracción de componente donde importo los componente Avatar y UserInfo

function Extraccion(props) {
  return(
    <div className="Comment">
      <UserInfo 
      user = {props.author} //Recibiendo del abuelo
      />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
}



export default Extraccion;