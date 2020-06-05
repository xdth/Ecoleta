import multer from 'multer';
import path from 'path';
import crypto from 'crypto';

export default {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename(request, file, callback) {
            const hash = crypto.randomBytes(6).toString('hex');
            const fileName = `${hash}-${file.originalname}`;

            // instead of "null" here, we would ideally catch errors and don't send the 2nd param (fileName)
            callback(null, fileName);
        }
    }),
};

// filter files: https://www.npmjs.com/package/multer#filefilter