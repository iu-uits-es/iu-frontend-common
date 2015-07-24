import React from 'react/addons';

import NavigationSubMenu from './NavigationSubMenu'

export class NavigationItem extends React.Component {
    render() {
        const item = this.props.item;
        var subMenu = null,
            dropdownCaret = null;
        if(item.subItems !== undefined) {
            subMenu = (<NavigationSubMenu items={item.subItems} />);
            dropdownCaret = (
                <div className="nav-caret">
                    <i className="fa fa-lg fa-caret-down"></i>
                </div>
            );
        }
        return (
            <li>
                <a href={this.props.item.url} className={'clearfix' + (subMenu !== null ? ' dropdown-toggle' : '')} title={this.props.display} data-toggle={(subMenu !== null ? 'dropdown' : null )}>
                    <div className="nav-icon">
                        <i className={'fa fa-lg fa-' + item.icon}></i>
                    </div>
                    <div className="hidden-sm hidden-xs pull-left">{item.display}</div>
                    {dropdownCaret}
                </a>
                {subMenu}
            </li>
        );
    }
}