'use client';
import PropTypes from 'prop-types';

import { isValidElement } from 'react';

// @mui
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';

// @project
import DynamicComponent from './DynamicComponent';
import GetImagePath from '@/utils/GetImagePath';

/***************************  IMAGE - TYPE IDENTIFY ***************************/
function isImageComponentProps(value) {
  return value && value.light !== undefined && value.dark !== undefined;
}

function isDynamicImageProps(value) {
  return value && value.component !== undefined && value.type !== undefined;
}

/***************************  DYNAMIC GRAPHICS - IMAGE  ***************************/
/**
 * Unified component for rendering images. Accepts:
 * - string (URL or path) → <img>
 * - ImageComponentProps ({ light, dark }) → <img> via GetImagePath()
 * - DynamicImageProps ({ component, type }) → DynamicComponent
 * - React element → returned directly
 */
export default function GraphicsImage({ children, image, sx, cardMediaProps }) {
  if (isValidElement(image)) {
    return image;
  }

  if (isDynamicImageProps(image)) {
    return <DynamicComponent component={image.component} type={image.type} />;
  }

  // String URL or ImageComponentProps → render <img>
  const srcPath = GetImagePath(image);
  return (
    <Box
      component="img"
      src={srcPath}
      alt="Graphics"
      loading="lazy"
      sx={{ display: 'block', width: 'auto', ...sx }}
      {...cardMediaProps}
    />
  );
}

GraphicsImage.propTypes = {
  children: PropTypes.node,
  image: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.shape({ light: PropTypes.string, dark: PropTypes.string }),
    PropTypes.shape({ component: PropTypes.string, type: PropTypes.string })
  ]),
  sx: PropTypes.object,
  cardMediaProps: PropTypes.object
};
