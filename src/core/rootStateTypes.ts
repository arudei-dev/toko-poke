
export type TAppTheme = 'light' | 'dark'

export type TMyProfile = {
  myPokeList: number[],
}

export type TRootState = {
  useTheme: TAppTheme,
  myProfile?: TMyProfile,
}