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
import SimLauncher from '../../joist/js/SimLauncher.js';
import Tandem from '../../tandem/js/Tandem.js';
import diffusionStrings from './diffusionStrings.js';

const simOptions = {

  // Creates content for the Options dialog, accessible via the PhET menu
  createOptionsDialogContent: tandem => new GasPropertiesGlobalOptionsNode( {
    hasPressureNoiseCheckbox: false, // pressure noise is irrelevant in Diffusion because there is no pressure gauge
    tandem: tandem
  } ),

  // Credits appear in the About dialog, accessible via the PhET menu
  credits: GasPropertiesConstants.CREDITS
};

// launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
// until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
SimLauncher.launch( () => {
  const sim = new Sim( diffusionStrings.diffusion.title, [
    new DiffusionScreen( Tandem.ROOT.createTandem( 'diffusionScreen' ) )
  ], simOptions );
  sim.start();
} );