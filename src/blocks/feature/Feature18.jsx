'use client';
import PropTypes from 'prop-types';
import { useState } from 'react';

// @mui
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// @project
import ContainerWrapper from '@/components/ContainerWrapper';
import { GraphicsCard } from '@/components/cards';
import SvgIcon from '@/components/SvgIcon';
import Typeset from '@/components/Typeset';
import { SECTION_COMMON_PY } from '@/utils/constant';

// @assets
import GraphicsImage from '@/components/GraphicsImage';

/***************************  FEATURE - 18  ***************************/
export default function Feature18({ heading, caption, topics }) {
  const boxPadding = { xs: 3, md: 5 };
  const imagePadding = { xs: 3, sm: 4, md: 5 };
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Box sx={{ maxWidth: 'lg', width: '100%', mx: 'auto' }}>
        <Stack sx={{ gap: { xs: 3, sm: 4 } }}>
          <Typeset
            heading={heading}
            caption={caption}
            stackProps={{ sx: { alignItems: 'center', textAlign: 'center', maxWidth: { sm: 470, md: 615 }, mx: 'auto' } }}
          />

          <TabContext value={value}>
            <GraphicsCard sx={{ width: '100%' }}>
              <Box sx={{ p: 0.25 }}>
                <TabList
                  onChange={handleChange}
                  variant="scrollable"
                  sx={{ '& .MuiTabs-indicator': { display: 'none' }, minHeight: 'unset', p: 0.25 }}
                >
                  {topics.map((item, idx) => (
                    <Tab
                      key={idx}
                      label={item.title}
                      value={String(idx + 1)}
                      icon={<SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : item.icon)} size={16} stroke={2} color="text.secondary" />}
                      iconPosition="start"
                      disableFocusRipple
                      sx={{
                        minHeight: 44,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderStyle: 'solid',
                        borderColor: 'transparent',
                        '&.Mui-selected': { bgcolor: 'grey.200', borderColor: 'grey.400', color: 'text.primary', '& svg': { stroke: 'text.primary' } },
                        '&:hover': { bgcolor: 'grey.200' }
                      }}
                    />
                  ))}
                </TabList>
              </Box>
            </GraphicsCard>

            {topics.map((item, idx) => (
              <TabPanel key={idx} value={String(idx + 1)} sx={{ p: 0 }}>
                <Grid container spacing={2} alignItems="stretch">
                  {/* Image Card */}
                  <Grid item xs={12} md={5}>
                    <GraphicsCard sx={{ height: '100%' }}>
                      <Box sx={{ p: imagePadding, height: 1 }}>
                        <GraphicsImage
                          image={item.image}
                          sx={{ height: 1, width: 1, objectFit: 'cover', borderRadius: 2 }}
                        />
                      </Box>
                    </GraphicsCard>
                  </Grid>

                  {/* Text Card */}
                  <Grid item xs={12} md={7}>
                    <GraphicsCard sx={{ height: '100%' }}>
                      <Stack sx={{ p: boxPadding, justifyContent: 'space-between', height: '100%' }}>
                        <Box>
                          <Stack direction="row" alignItems="center" spacing={1}>
                            <SvgIcon {...(typeof item.icon === 'string' ? { name: item.icon } : item.icon)} size={20} stroke={2} color="text.primary" />
                            <Typography variant="h6">{item.title}</Typography>
                          </Stack>
                          {item.text && (
                            <Typography variant="subtitle1" color="text.secondary" sx={{ mt: 1 }}>
                              {item.text}
                            </Typography>
                          )}
                        </Box>

                        {(item.actionBtn2 || item.actionBtn) && (
                          <GraphicsCard sx={{ bgcolor: 'grey.200' }}>
                            <Stack direction="row" spacing={1.5} sx={{ p: { xs: 2, sm: 3, md: 4 } }}>
                              {item.actionBtn2 && <Button variant="outlined" color="primary" startIcon={<SvgIcon name="tabler-help" size={16} stroke={3} />} {...item.actionBtn2} />}
                              {item.actionBtn && <Button variant="contained" color="primary" startIcon={<SvgIcon name="tabler-link" size={16} stroke={3} color="background.default" />} {...item.actionBtn} />}
                            </Stack>
                          </GraphicsCard>
                        )}
                      </Stack>
                    </GraphicsCard>
                  </Grid>
                </Grid>
              </TabPanel>
            ))}
          </TabContext>
        </Stack>
      </Box>
    </ContainerWrapper>
  );
}

Feature18.propTypes = {
  heading: PropTypes.string,
  caption: PropTypes.string,
  topics: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      text: PropTypes.string,
      actionBtn: PropTypes.object,
      actionBtn2: PropTypes.object
    })
  )
};
