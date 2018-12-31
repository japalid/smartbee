import { Dimensions, PixelRatio } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

function scale(size){
	return width / guidelineBaseWidth * size;
}

function verticalScale(size) {
	return height / guidelineBaseHeight * size;
}

function moderateScale(size, factor = 1){
	if(PixelRatio.get() == 2 && PixelRatio.getPixelSizeForLayoutSize(height) <= 960 ){
		return size + ( scale(size) - size ) * 4.5;
	}else{
		return size + ( scale(size) - size ) * factor;
	}
}

function customScale(size){
	if(PixelRatio.get() === 1){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 1.5){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 2){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 3){
		return moderateScale(size + 60);
	}
	else if(PixelRatio.get() === 3.5){
		return moderateScale(size + 100);
	}
}

function customScaleAndroid(size){
	if(PixelRatio.get() === 1){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 1.5){
		return moderateScale(size + 3);
	}
	else if(PixelRatio.get() === 2){
		return moderateScale(size + 15);
	}
	else if(PixelRatio.get() < 3){
		return moderateScale(size + 17);
	}
	else if(PixelRatio.get() === 3){
		if(PixelRatio.getPixelSizeForLayoutSize(height) >= 1920)
			return moderateScale(size - 16);
		else if(PixelRatio.getPixelSizeForLayoutSize(height) >= 1280)
			return moderateScale(size);
		else
			return moderateScale(size - 16);
	}
	else if(PixelRatio.get() === 3.5){
		return moderateScale(size + 15);
	}
}

function customScaleIos(size){
	if(PixelRatio.get() === 1){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 1.5){
		return moderateScale(size + 3);
	}
	else if(PixelRatio.get() === 2){
		return moderateScale(size + 10);
	}
	else if(PixelRatio.get() === 3){
		if(PixelRatio.getPixelSizeForLayoutSize(height) >= 2400)
			return moderateScale(size - 3);
		else if(PixelRatio.getPixelSizeForLayoutSize(height) >= 1280)
			return moderateScale(size);
		else
			return moderateScale(size - 16);
	}
	else if(PixelRatio.get() === 3.5){
		return moderateScale(size + 15);
	}
}

function customScaleAndroidEctButton(size){
	if(PixelRatio.get() === 1){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 1.5){
		return moderateScale(size + 3);
	}
	else if(PixelRatio.get() === 2){
		return moderateScale(size + 7);
	}
	else if(PixelRatio.get() < 3){
		return moderateScale(size - 4);
	}
	else if(PixelRatio.get() === 3){
		if(PixelRatio.getPixelSizeForLayoutSize(height) >= 1920)
			return moderateScale(size - 6.5);
		else if(PixelRatio.getPixelSizeForLayoutSize(height) >= 1280)
			return moderateScale(size);
		else
			return moderateScale(size - 16);
	}
	else if(PixelRatio.get() === 3.5){
		return moderateScale(size + 15);
	}
}

function customScaleIosEctButton(size){
	if(PixelRatio.get() === 1){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 1.5){
		return moderateScale(size + 3);
	}
	else if(PixelRatio.get() === 2){
		return moderateScale(size - 26);
	}
	else if(PixelRatio.get() < 3){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 3){
		if(PixelRatio.getPixelSizeForLayoutSize(height) >= 2400)
			return moderateScale(size - 4);
		else if(PixelRatio.getPixelSizeForLayoutSize(height) >= 1280)
			return moderateScale(size);
		else
			return moderateScale(size - 16);
	}
	else if(PixelRatio.get() === 3.5){
		return moderateScale(size + 15);
	}
}

function customScaleAndroidActivityButton(size){
	if(PixelRatio.get() === 1){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 1.5){
		return moderateScale(size + 3);
	}
	else if(PixelRatio.get() === 2){
		return moderateScale(size + 10);
	}
	else if(PixelRatio.get() < 3){
		return moderateScale(size + 17);
	}
	else if(PixelRatio.get() === 3){
		if(PixelRatio.getPixelSizeForLayoutSize(height) >= 1920)
			return moderateScale(size + 9.5);
		else if(PixelRatio.getPixelSizeForLayoutSize(height) >= 1280)
			return moderateScale(size);
		else
			return moderateScale(size - 16);
	}
	else if(PixelRatio.get() === 3.5){
		return moderateScale(size + 15);
	}
}

function customScaleIosActivityButton(size){
	if(PixelRatio.get() === 1){
		return moderateScale(size);
	}
	else if(PixelRatio.get() === 1.5){
		return moderateScale(size + 3);
	}
	else if(PixelRatio.get() === 2){
		return moderateScale(size - 26);
	}
	else if(PixelRatio.get() === 3){
		if(PixelRatio.getPixelSizeForLayoutSize(height) >= 2400)
			return moderateScale(size - 1);
		else if(PixelRatio.getPixelSizeForLayoutSize(height) >= 1280)
			return moderateScale(size);
		else
			return moderateScale(size - 16);
	}
	else if(PixelRatio.get() === 3.5){
		return moderateScale(size + 15);
	}
}

export {scale, verticalScale, moderateScale, customScale, customScaleAndroid, customScaleAndroidEctButton, customScaleAndroidActivityButton, customScaleIos, customScaleIosActivityButton, customScaleIosEctButton};


