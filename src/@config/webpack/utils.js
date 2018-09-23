const Path = require( "path" );
const RootPath = require( "app-root-path" );

module.exports = Utils = {
	
	root: ( ...args ) => {
		return RootPath.resolve( Path.join( ...args ) );
	}
};