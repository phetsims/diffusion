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
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const diffusionTitleString = require( 'string!DIFFUSION/diffusion.title' );

  //TODO get these from GasPropertiesConstants.CREDITS
  const simOptions = {
    credits: {
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
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