import React from 'react/addons';

export class UserContextNavigationItem extends React.Component {
    render() {
        const item = this.props.item;
        return (
            <li>
                <a href={item.url} title={item.display}><i className={'fa fa-' + item.icon}></i> {item.display}</a>
            </li>
        );
    }
}