import React from 'react/addons';

import UserContextNavigationItem from './UserContextNavigationItem';

export class UserContextMenu extends React.Component {
    getInitialState() {
        return {
            navigation: []
        };
    }
    componentDidMount() {
        var _this = this;
        $.ajax({
            dataType: "json",
            url: "/js/demo/user-context-navigation.json",
            success: function(data) {
                _this.setState({
                    navigation: data
                });
            }
        });
    }
    render() {
        return (
            <div>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    {this.props.displayName} <i className="fa fa-lg fa-caret-down"></i>
                </a>
                <ul className="dropdown-menu dropdown-menu-right">
                    {
                        this.state.navigation.map(function(item) {
                            return (<UserContextNavigationItem item={item} />);
                        })
                    }
                </ul>
            </div>
        );
    }
};