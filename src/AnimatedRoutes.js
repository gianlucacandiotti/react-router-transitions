import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Switch } from 'react-router-dom';
import * as Animated from 'animated/lib/targets/react-dom';
import { TransitionGroup, Transition } from 'react-transition-group';

class AnimatedRoutes extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.node.isRequired,
  };

  state = {
    animate: new Animated.Value(0),
    location: this.props.location,
  };

  handleEnter = () => {
    setTimeout(() => {
      Animated.spring(this.state.animate, { toValue: 1 }).start();
    }, 300);
  };

  handleExit = () => {
    Animated.spring(this.state.animate, { toValue: 0 }).start();

    setTimeout(() => {
      this.setState({
        location: this.props.location,
      });
    }, 200);
  };

  render() {
    const {
      children,
    } = this.props;

    const {
      location,
      animate,
    } = this.state;

    const currentKey = this.props.location.pathname.split('/')[1] || '/';

    const timeout = { enter: 300, exit: 200 };

    const interpolation = (
      animate.interpolate({
        inputRange: [0, 1],
        outputRange: ['12px', '0px'],
      })
    );

    const style = {
      opacity: Animated.template`${animate}`,
      transform: Animated.template`translate3d(0, ${interpolation}, 0)`,
    };

    return (
      <TransitionGroup component="main">
        <Transition
          key={currentKey}
          timeout={timeout}
          onEnter={this.handleEnter}
          onExit={this.handleExit}
          appear
        >
          <Animated.div className="animated-page-wrapper" style={style}>
            <Switch location={location}>
              {children}
            </Switch>
          </Animated.div>
        </Transition>
      </TransitionGroup>
    );
  }
}

export default withRouter(AnimatedRoutes);
