// Copyright 2019-2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */

import GasPropertiesConstants from '../../gas-properties/js/common/GasPropertiesConstants.js';
import GasPropertiesGlobalOptionsNode from '../../gas-properties/js/common/view/GasPropertiesGlobalOptionsNode.js';
import DiffusionScreen from '../../gas-properties/js/diffusion/DiffusionScreen.js';
import Sim from '../../joist/js/Sim.js';
import simLauncher from '../../joist/js/simLauncher.js';
import Utils from '../../scenery/js/util/Utils.js';
import Tandem from '../../tandem/js/Tandem.js';
import diffusionStrings from './diffusionStrings.js';

const simOptions = {

  // Enabled for high-performance Sprites
  webgl: true,

  // Creates content for the Options dialog, accessible via the PhET menu
  createOptionsDialogContent: tandem => new GasPropertiesGlobalOptionsNode( {
    hasPressureNoiseCheckbox: false, // pressure noise is irrelevant in Diffusion because there is no pressure gauge
    tandem: tandem
  } ),

  // Credits appear in the About dialog, accessible via the PhET menu
  credits: GasPropertiesConstants.CREDITS
};

// launch the sim - beware that scenery Image nodes created outside of simLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
simLauncher.launch( () => {

  const sim = new Sim( diffusionStrings.diffusion.title, [
    new DiffusionScreen( Tandem.ROOT.createTandem( 'diffusionScreen' ) )
  ], simOptions );

  // Log whether we're using WebGL, which is the preferred rendering option for Sprites
  phet.log && phet.log( `using WebGL = ${phet.chipper.queryParameters.webgl && Utils.isWebGLSupported}` );

  sim.start();
} );