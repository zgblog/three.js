import { UISelect } from './libs/ui.js';
/**
 * 作色方式
 * @param {*} editor 
 * @returns 
 */
function ViewportShading( editor ) {

	const select = new UISelect();
	select.setPosition( 'absolute' );
	select.setRight( '10px' );
	select.setTop( '10px' );
	select.setOptions( { 'default': 'default', 'normals': 'normals', 'wireframe': 'wireframe' } );
	select.setValue( 'default' );
	select.onChange( function () {

		editor.setViewportShading( this.getValue() );

	} );

	return select;

}

export { ViewportShading };
