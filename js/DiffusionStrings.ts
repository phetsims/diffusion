// Copyright 2020-2022, University of Colorado Boulder

/**
 * Auto-generated from modulify, DO NOT manually modify.
 */
/* eslint-disable */
import getStringModule from '../../chipper/js/getStringModule.js';
import TReadOnlyProperty from '../../axon/js/TReadOnlyProperty.js';
import diffusion from './diffusion.js';

type StringsType = {
  'diffusion': {
    'title': string;
    'titleStringProperty': TReadOnlyProperty<string>;
  }
};

const diffusionStrings = getStringModule( 'DIFFUSION' ) as StringsType;

diffusion.register( 'diffusionStrings', diffusionStrings );

export default diffusionStrings;
