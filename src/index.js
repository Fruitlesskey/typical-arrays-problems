exports.min = function min(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            if (element < min) {
                min = element;
            }
        }
        return min;
    }
};

exports.max = function max(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            let Element = array[i];
            if (Element > max) {
                max = Element;
            }
        }
        return max;
    }
};

exports.avg = function avg(array) {
    if (!array || !array.length) {
        return 0;
    } else {
        let avg = 0;

        for (let i = 0; i < array.length; i++) {
            avg += array[i];
        }
        return avg / array.length;
    }
};
