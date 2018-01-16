import YAML from 'yamljs';

const NativeObj = (name) => {
	var nativeObject = YAML.load(__dirname+'/'+name+'.yml');
	return nativeObject;
} 

export default NativeObj;

