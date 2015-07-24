import React from 'react/addons';

export class  NavigationSubMenu extends React.Component {
   render() {
       return (
           <ul className="dropdown-menu">
               {
                   this.props.items.map(function(item) {
                       return (<li><a href={item.url}>{item.display}</a></li>);
                   })
               }
           </ul>
       );
   }
}