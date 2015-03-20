import Ember from 'ember';
import {railsAsset} from '../helpers/rails-asset';

export default Ember.Component.extend({
  src: null,

  fingerPrinted: function() {
    return railsAsset(this.get('src'));
  }.property('src')
});
