import React, { Component } from 'react';
import * as Animated from 'animated/lib/targets/react-dom';
import Transition from 'react-transition-group/Transition';

const AnimatedWrapper = WrappedComponent => (
  class extends Component {
    state = {
      animate: new Animated.Value(0),
    };

    componentWillReceiveProps() {
      this.handleEnter();
    }

    handleEnter = () => {
      this.state.animate.setValue(0);
      Animated.spring(this.state.animate, { toValue: 1 }).start();
    };

    handleExit = () => {
      Animated.spring(this.state.animate, { toValue: 0 }).start();
    };

    render() {
      const {
        in: _in,
        ...rest
      } = this.props;

      const {
        animate,
      } = this.state;

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
        <Transition
          in={_in}
          timeout={200}
          onEnter={this.handleEnter}
          onExit={this.handleExit}
          appear
        >
          <Animated.div className="animated-page-wrapper" style={style}>
            <WrappedComponent {...rest} />
          </Animated.div>
        </Transition>
      );
    }
  }
);

export default AnimatedWrapper;
