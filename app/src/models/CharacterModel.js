import _ from 'lodash';
import schema from 'js-schema';

import Collection from 'models/Collection';
import Model from 'models/Model'

export const characterSchema = schema({
  // name of character
  name: String,
  // character's id
  id: String,
  // sub title of character
  title: String,
  // list of stats
  stats: Collection,
  // list of equipment
  equipments: Array,
  // list of inventory
  inventory: Collection,
  // any innate traits
  traits: Array,
  // honors given
  honors: Array,
})

export class CharacterModel extends Model {
  constructor(options = {}) {
    super(options);

    // set Model's attributes equal to some default plus whatever is passed in
    this.attributes = _.assign({}, {
      name: null,
      id: null,
      title: '',
      stats: new Collection(),
      equipments: [],
      inventory: new Collection(),
      traits: [],
      honors: [],
    }, options);

    // validate
    if (!characterSchema(this.attributes)) {
      console.error(characterSchema.errors(this.attributes));
    }

  }
}

export default CharacterModel;