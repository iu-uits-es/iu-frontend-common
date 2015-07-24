import React from 'react/addons';

import NavigationItem from './NavigationItem';

export class Navigation extends React.Component {
    getInitialState() {
        return {
            navigation: []
        };
    }
    componentDidMount() {
        var _this = this;
        $.ajax({
            dataType: "json",
            url: "/js/demo/navigation.json",
            success: function(data) {
                _this.setState({
                    navigation: data
                });
            }
        });
    }
    render() {
        return (
            <ul className="nav navbar-nav">
                {
                    this.state.navigation.map(function(item) {
                        return (<NavigationItem item={item} />);
                    })
                }
            </ul>
        );
    }
}