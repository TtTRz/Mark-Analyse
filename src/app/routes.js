const prefix = '';


export const LPHHRoutes = {
  LPHH_ROOT: `/lphh`,
  ANALYSE_ROOT: `/lphh/analyse`,
};

export const AnalyseRoutes = {
  TERM_LIST: `${LPHHRoutes.ANALYSE_ROOT}/term_list`,
  TERM: `${LPHHRoutes.ANALYSE_ROOT}/:termId/content`
};