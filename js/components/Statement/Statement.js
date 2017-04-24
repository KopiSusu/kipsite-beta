/* eslint react/prefer-stateless-function: 0, react/forbid-prop-types: 0 */
/* eslint global-require: 0 */
import React, { Component } from 'react';
import Typist from 'react-typist';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import { Icon } from '../../themes';

export default class Statement extends Component {

	constructor(props) {
		super(props);
		this._animation = ::this._animation;
		this.state = {
		  typing: true
		};
	}

	componentWillUnmount() {
		const { _animation } = this;
		_animation(true);
	}

	componentDidMount() {
		const { _animation } = this;
		_animation();
	}

	componentWillReceiveProps(nextProps) {
		const { _animation, props: { items } } = this;


		if( items[0].id !== nextProps.items[0].id) {
			_animation(true);
			this.setState({
				typing: true
			});
			_animation();
		}
	}

	_animation(stop) {
		if (stop) {
			if (self) clearTimeout(self.timeout);
			clearTimeout(this.timeout);
		} else {
			let self = this;
			self.timeout = setTimeout(() => {
				self.setState({
					typing: false
				});
			}, 3500);
		}
	}

  	render() {
  		const { state: { typing }, props: { items } } = this;
	    return (
	      	<div className="statement"> 
		        <div className="col-9 row-1 card">
		        	<div className="col-12 row-1 headline">
		        		<h1>Kip Gets Your Team</h1>
		        		{
				            typing ? <div className='Static'>
				            	<span className='Cursor Cursor--blinking'>&nbsp;|</span>
				            </div> : <Typist 
				              	cursor={{
				                	show: true
				              	}} 
				              	avgTypingDelay={100} 
				              	stdTypingDelay={0}>
				        		<h1>&nbsp;{`${items[0].searchTerm}`}</h1>
			            	</Typist> 
				        }
		        	</div>
		        </div>
	      	</div>
	    );
  	}
}