import React from 'react';
import ReactDOM from 'react-dom';
import mixin from 'react-mixin';
import linkedStateMixin from 'react-addons-linked-state-mixin';
import Ripple from 'immaterial-design-ripple';
import ElasticModal from 'react-elastic-modal';

import { Textfield, Grid, Cell } from 'react-mdl';

import './index.styl';

const ContainerKey = 'container';
class Container extends React.Component {
  constructor() {
    super();

    const storageState = JSON.parse(localStorage.getItem(ContainerKey));
    const initialState = { isOpen: false, pkg: '', paths: '' };
    this.state = storageState || initialState;
  }
  componentDidMount() {
    this.onMount();
  }
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem(ContainerKey, JSON.stringify(this.state));
    if (this.state.pkg === prevState.pkg) {
      return;
    }

    this.resetPaths();
  }
  onMount() {
    const buttons = [].slice.call(this.refs.main.querySelectorAll('button'));
    buttons.map((button) => new Ripple(button, { color: 'rgba(213,0,0,0.3)' }));
  }
  open() {
    this.setState({ isOpen: true });
    setTimeout(() => {
      this.refs.pkg.refs.input.focus();

      const fixFloatingRequired = document.createEvent('KeyboardEvent');
      fixFloatingRequired.initKeyboardEvent('keyup');
      this.refs.pkg.refs.input.dispatchEvent(fixFloatingRequired);
    });
  }
  close() {
    this.setState({ isOpen: false });
  }
  resetPaths() {
    this.setState({ paths: '' });
  }
  handleSubmit(event) {
    event.preventDefault();

    location.href = `/${this.state.pkg}/${this.state.paths}`;
  }
  render() {
    const baseSize = 480;
    return (
      <div ref="main" id="main">
        <button id="title" onClick={ ::this.open }>cdn.berabou.me</button>
        <ElasticModal
          isOpen={ this.state.isOpen }
          onRequestClose={ ::this.close }
          id="modal"
          modal={{
            width: `${baseSize}px`,
            height: `${baseSize / 1.618}px`,
            backgroundColor: '#eee',
            overflowY: 'hidden',
          }}
          overlay={{
            background: 'rgba(213,0,0,0.3)',
          }}
        >
          <form onSubmit={::this.handleSubmit}>
            <h2>Access to your package</h2>
            <Grid>
              <Cell col={8}>
                <Textfield
                  ref="pkg"
                  label="package@version"
                  valueLink={this.linkState('pkg')}
                  required
                  primary
                  floatingLabel
                />
                <Textfield
                  ref="paths"
                  valueLink={this.linkState('paths')}
                  label="/path/to/file.ext"
                  floatingLabel
                />
              </Cell>
              {/* simler text-align right*/}
              <Cell col={4} align="bottom" style={{ margin: '0 0 0 auto' }}>
                <button onClick={ ::this.open }>Show</button>
              </Cell>
            </Grid>
          </form>
        </ElasticModal>
      </div>
    );
  }
}

mixin(Container.prototype, linkedStateMixin);

window.addEventListener('load', () => {
  ReactDOM.render(<Container />, document.querySelector('#container'));
});
