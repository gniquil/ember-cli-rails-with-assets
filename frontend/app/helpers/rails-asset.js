import Ember from 'ember';

export function railsAsset(input) {
  return window.EMBER_CLI_RAILS_ASSETS[input];
}

export default Ember.Handlebars.makeBoundHelper(railsAsset);
