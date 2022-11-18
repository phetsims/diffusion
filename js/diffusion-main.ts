// Copyright 2019-2022, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GasPropertiesConstants from '../../gas-properties/js/common/GasPropertiesConstants.js';
import DiffusionScreen from '../../gas-properties/js/diffusion/DiffusionScreen.js';
import PreferencesModel from '../../joist/js/preferences/PreferencesModel.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import { Utils } from '../../scenery/js/imports.js';
import Tandem from '../../tandem/js/Tandem.js';
import DiffusionStrings from './DiffusionStrings.js';

simLauncher.launch( () => {

  const screens = [
    new DiffusionScreen( Tandem.ROOT.createTandem( 'diffusionScreen' ) )
  ];

  const sim = new Sim( DiffusionStrings.diffusion.titleStringProperty, screens, {
    webgl: true, // Enabled for high-performance Sprites
    credits: GasPropertiesConstants.CREDITS,
    preferencesModel: new PreferencesModel( {
      visualOptions: {
        supportsProjectorMode: true
      }
    } )
  } );

  // Log whether we're using WebGL, which is the preferred rendering option for Sprites
  phet.log && phet.log( `using WebGL = ${phet.chipper.queryParameters.webgl && Utils.isWebGLSupported}` );

  sim.start();
} );