// Copyright 2019, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Chris Malley (PixelZoom, Inc.)
 */
define( require => {
  'use strict';

  // modules
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const DiffusionScreen = require( 'GAS_PROPERTIES/diffusion/DiffusionScreen' );
  const GasPropertiesConstants = require( 'GAS_PROPERTIES/common/GasPropertiesConstants' );
  const GasPropertiesGlobalOptionsNode = require( 'GAS_PROPERTIES/common/view/GasPropertiesGlobalOptionsNode' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const diffusionTitleString = require( 'string!DIFFUSION/diffusion.title' );

  const simOptions = {

    // Contents of the Options dialog, accessible via the PhET menu
    optionsNode: new GasPropertiesGlobalOptionsNode( {
      hasPressureNoiseCheckbox: false // pressure noise is irrelevant in Diffusion because there is no pressure gauge
    } ),

    // Credits appear in the About dialog, accessible via the PhET menu
    credits: GasPropertiesConstants.CREDITS
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( diffusionTitleString, [
      new DiffusionScreen( Tandem.rootTandem.createTandem( 'diffusionScreen' ) )
    ], simOptions );
    sim.start();
  } );
} );