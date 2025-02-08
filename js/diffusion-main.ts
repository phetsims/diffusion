// Copyright 2019-2025, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GasPropertiesConstants from '../../gas-properties/js/common/GasPropertiesConstants.js';
import DiffusionScreen from '../../gas-properties/js/diffusion/DiffusionScreen.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim, { SimOptions } from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import { combineOptions } from '../../phet-core/js/optionize.js';
import Utils from '../../scenery/js/util/Utils.js';
import Tandem from '../../tandem/js/Tandem.js';
import DiffusionStrings from './DiffusionStrings.js';

simLauncher.launch( () => {

  const titleStringProperty = DiffusionStrings.diffusion.titleStringProperty;

  const screens = [
    new DiffusionScreen( Tandem.ROOT.createTandem( 'diffusionScreen' ) )
  ];

  const options = combineOptions<SimOptions>( {}, GasPropertiesConstants.SIM_OPTIONS, {
    preferencesModel: new PreferencesModel( {
      visualOptions: {
        supportsProjectorMode: true
      }
    } )
  } );

  const sim = new Sim( titleStringProperty, screens, options );

  // Log whether we're using WebGL, which is the preferred rendering option for Sprites
  phet.log && phet.log( `using WebGL = ${phet.chipper.queryParameters.webgl && Utils.isWebGLSupported}` );

  sim.start();
} );