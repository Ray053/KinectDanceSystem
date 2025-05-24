
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'NuxtWelcome': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'Badge': typeof import("../components/ui/badge/index")['Badge']
    'Breadcrumb': typeof import("../components/ui/breadcrumb/index")['Breadcrumb']
    'BreadcrumbEllipsis': typeof import("../components/ui/breadcrumb/index")['BreadcrumbEllipsis']
    'BreadcrumbItem': typeof import("../components/ui/breadcrumb/index")['BreadcrumbItem']
    'BreadcrumbLink': typeof import("../components/ui/breadcrumb/index")['BreadcrumbLink']
    'BreadcrumbList': typeof import("../components/ui/breadcrumb/index")['BreadcrumbList']
    'BreadcrumbPage': typeof import("../components/ui/breadcrumb/index")['BreadcrumbPage']
    'BreadcrumbSeparator': typeof import("../components/ui/breadcrumb/index")['BreadcrumbSeparator']
    'Button': typeof import("../components/ui/button/index")['Button']
    'Card': typeof import("../components/ui/card/index")['Card']
    'CardHeader': typeof import("../components/ui/card/index")['CardHeader']
    'CardTitle': typeof import("../components/ui/card/index")['CardTitle']
    'CardDescription': typeof import("../components/ui/card/index")['CardDescription']
    'CardContent': typeof import("../components/ui/card/index")['CardContent']
    'CardFooter': typeof import("../components/ui/card/index")['CardFooter']
    'DropdownMenuPortal': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
    'DropdownMenu': typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
    'DropdownMenuTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
    'DropdownMenuContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
    'DropdownMenuGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
    'DropdownMenuRadioGroup': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
    'DropdownMenuItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
    'DropdownMenuCheckboxItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
    'DropdownMenuRadioItem': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
    'DropdownMenuShortcut': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
    'DropdownMenuSeparator': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
    'DropdownMenuLabel': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
    'DropdownMenuSub': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
    'DropdownMenuSubTrigger': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
    'DropdownMenuSubContent': typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
    'Input': typeof import("../components/ui/input/index")['Input']
    'Select': typeof import("../components/ui/select/index")['Select']
    'SelectContent': typeof import("../components/ui/select/index")['SelectContent']
    'SelectGroup': typeof import("../components/ui/select/index")['SelectGroup']
    'SelectItem': typeof import("../components/ui/select/index")['SelectItem']
    'SelectItemText': typeof import("../components/ui/select/index")['SelectItemText']
    'SelectLabel': typeof import("../components/ui/select/index")['SelectLabel']
    'SelectScrollDownButton': typeof import("../components/ui/select/index")['SelectScrollDownButton']
    'SelectScrollUpButton': typeof import("../components/ui/select/index")['SelectScrollUpButton']
    'SelectSeparator': typeof import("../components/ui/select/index")['SelectSeparator']
    'SelectTrigger': typeof import("../components/ui/select/index")['SelectTrigger']
    'SelectValue': typeof import("../components/ui/select/index")['SelectValue']
    'Sheet': typeof import("../components/ui/sheet/index")['Sheet']
    'SheetTrigger': typeof import("../components/ui/sheet/index")['SheetTrigger']
    'SheetClose': typeof import("../components/ui/sheet/index")['SheetClose']
    'SheetContent': typeof import("../components/ui/sheet/index")['SheetContent']
    'SheetHeader': typeof import("../components/ui/sheet/index")['SheetHeader']
    'SheetTitle': typeof import("../components/ui/sheet/index")['SheetTitle']
    'SheetDescription': typeof import("../components/ui/sheet/index")['SheetDescription']
    'SheetFooter': typeof import("../components/ui/sheet/index")['SheetFooter']
    'Table': typeof import("../components/ui/table/index")['Table']
    'TableBody': typeof import("../components/ui/table/index")['TableBody']
    'TableCell': typeof import("../components/ui/table/index")['TableCell']
    'TableHead': typeof import("../components/ui/table/index")['TableHead']
    'TableHeader': typeof import("../components/ui/table/index")['TableHeader']
    'TableRow': typeof import("../components/ui/table/index")['TableRow']
    'TableCaption': typeof import("../components/ui/table/index")['TableCaption']
    'TableEmpty': typeof import("../components/ui/table/index")['TableEmpty']
    'Tabs': typeof import("../components/ui/tabs/index")['Tabs']
    'TabsTrigger': typeof import("../components/ui/tabs/index")['TabsTrigger']
    'TabsList': typeof import("../components/ui/tabs/index")['TabsList']
    'TabsContent': typeof import("../components/ui/tabs/index")['TabsContent']
    'Tooltip': typeof import("../components/ui/tooltip/index")['Tooltip']
    'TooltipContent': typeof import("../components/ui/tooltip/index")['TooltipContent']
    'TooltipTrigger': typeof import("../components/ui/tooltip/index")['TooltipTrigger']
    'TooltipProvider': typeof import("../components/ui/tooltip/index")['TooltipProvider']
    'ColorScheme': typeof import("../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
    'NuxtPage': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyBadge': LazyComponent<typeof import("../components/ui/badge/index")['Badge']>
    'LazyBreadcrumb': LazyComponent<typeof import("../components/ui/breadcrumb/index")['Breadcrumb']>
    'LazyBreadcrumbEllipsis': LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbEllipsis']>
    'LazyBreadcrumbItem': LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbItem']>
    'LazyBreadcrumbLink': LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbLink']>
    'LazyBreadcrumbList': LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbList']>
    'LazyBreadcrumbPage': LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbPage']>
    'LazyBreadcrumbSeparator': LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbSeparator']>
    'LazyButton': LazyComponent<typeof import("../components/ui/button/index")['Button']>
    'LazyCard': LazyComponent<typeof import("../components/ui/card/index")['Card']>
    'LazyCardHeader': LazyComponent<typeof import("../components/ui/card/index")['CardHeader']>
    'LazyCardTitle': LazyComponent<typeof import("../components/ui/card/index")['CardTitle']>
    'LazyCardDescription': LazyComponent<typeof import("../components/ui/card/index")['CardDescription']>
    'LazyCardContent': LazyComponent<typeof import("../components/ui/card/index")['CardContent']>
    'LazyCardFooter': LazyComponent<typeof import("../components/ui/card/index")['CardFooter']>
    'LazyDropdownMenuPortal': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']>
    'LazyDropdownMenu': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']>
    'LazyDropdownMenuTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
    'LazyDropdownMenuContent': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']>
    'LazyDropdownMenuGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']>
    'LazyDropdownMenuRadioGroup': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
    'LazyDropdownMenuItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']>
    'LazyDropdownMenuCheckboxItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
    'LazyDropdownMenuRadioItem': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
    'LazyDropdownMenuShortcut': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
    'LazyDropdownMenuSeparator': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
    'LazyDropdownMenuLabel': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']>
    'LazyDropdownMenuSub': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']>
    'LazyDropdownMenuSubTrigger': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
    'LazyDropdownMenuSubContent': LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
    'LazyInput': LazyComponent<typeof import("../components/ui/input/index")['Input']>
    'LazySelect': LazyComponent<typeof import("../components/ui/select/index")['Select']>
    'LazySelectContent': LazyComponent<typeof import("../components/ui/select/index")['SelectContent']>
    'LazySelectGroup': LazyComponent<typeof import("../components/ui/select/index")['SelectGroup']>
    'LazySelectItem': LazyComponent<typeof import("../components/ui/select/index")['SelectItem']>
    'LazySelectItemText': LazyComponent<typeof import("../components/ui/select/index")['SelectItemText']>
    'LazySelectLabel': LazyComponent<typeof import("../components/ui/select/index")['SelectLabel']>
    'LazySelectScrollDownButton': LazyComponent<typeof import("../components/ui/select/index")['SelectScrollDownButton']>
    'LazySelectScrollUpButton': LazyComponent<typeof import("../components/ui/select/index")['SelectScrollUpButton']>
    'LazySelectSeparator': LazyComponent<typeof import("../components/ui/select/index")['SelectSeparator']>
    'LazySelectTrigger': LazyComponent<typeof import("../components/ui/select/index")['SelectTrigger']>
    'LazySelectValue': LazyComponent<typeof import("../components/ui/select/index")['SelectValue']>
    'LazySheet': LazyComponent<typeof import("../components/ui/sheet/index")['Sheet']>
    'LazySheetTrigger': LazyComponent<typeof import("../components/ui/sheet/index")['SheetTrigger']>
    'LazySheetClose': LazyComponent<typeof import("../components/ui/sheet/index")['SheetClose']>
    'LazySheetContent': LazyComponent<typeof import("../components/ui/sheet/index")['SheetContent']>
    'LazySheetHeader': LazyComponent<typeof import("../components/ui/sheet/index")['SheetHeader']>
    'LazySheetTitle': LazyComponent<typeof import("../components/ui/sheet/index")['SheetTitle']>
    'LazySheetDescription': LazyComponent<typeof import("../components/ui/sheet/index")['SheetDescription']>
    'LazySheetFooter': LazyComponent<typeof import("../components/ui/sheet/index")['SheetFooter']>
    'LazyTable': LazyComponent<typeof import("../components/ui/table/index")['Table']>
    'LazyTableBody': LazyComponent<typeof import("../components/ui/table/index")['TableBody']>
    'LazyTableCell': LazyComponent<typeof import("../components/ui/table/index")['TableCell']>
    'LazyTableHead': LazyComponent<typeof import("../components/ui/table/index")['TableHead']>
    'LazyTableHeader': LazyComponent<typeof import("../components/ui/table/index")['TableHeader']>
    'LazyTableRow': LazyComponent<typeof import("../components/ui/table/index")['TableRow']>
    'LazyTableCaption': LazyComponent<typeof import("../components/ui/table/index")['TableCaption']>
    'LazyTableEmpty': LazyComponent<typeof import("../components/ui/table/index")['TableEmpty']>
    'LazyTabs': LazyComponent<typeof import("../components/ui/tabs/index")['Tabs']>
    'LazyTabsTrigger': LazyComponent<typeof import("../components/ui/tabs/index")['TabsTrigger']>
    'LazyTabsList': LazyComponent<typeof import("../components/ui/tabs/index")['TabsList']>
    'LazyTabsContent': LazyComponent<typeof import("../components/ui/tabs/index")['TabsContent']>
    'LazyTooltip': LazyComponent<typeof import("../components/ui/tooltip/index")['Tooltip']>
    'LazyTooltipContent': LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipContent']>
    'LazyTooltipTrigger': LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipTrigger']>
    'LazyTooltipProvider': LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipProvider']>
    'LazyColorScheme': LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const NuxtWelcome: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const Badge: typeof import("../components/ui/badge/index")['Badge']
export const Breadcrumb: typeof import("../components/ui/breadcrumb/index")['Breadcrumb']
export const BreadcrumbEllipsis: typeof import("../components/ui/breadcrumb/index")['BreadcrumbEllipsis']
export const BreadcrumbItem: typeof import("../components/ui/breadcrumb/index")['BreadcrumbItem']
export const BreadcrumbLink: typeof import("../components/ui/breadcrumb/index")['BreadcrumbLink']
export const BreadcrumbList: typeof import("../components/ui/breadcrumb/index")['BreadcrumbList']
export const BreadcrumbPage: typeof import("../components/ui/breadcrumb/index")['BreadcrumbPage']
export const BreadcrumbSeparator: typeof import("../components/ui/breadcrumb/index")['BreadcrumbSeparator']
export const Button: typeof import("../components/ui/button/index")['Button']
export const Card: typeof import("../components/ui/card/index")['Card']
export const CardHeader: typeof import("../components/ui/card/index")['CardHeader']
export const CardTitle: typeof import("../components/ui/card/index")['CardTitle']
export const CardDescription: typeof import("../components/ui/card/index")['CardDescription']
export const CardContent: typeof import("../components/ui/card/index")['CardContent']
export const CardFooter: typeof import("../components/ui/card/index")['CardFooter']
export const DropdownMenuPortal: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']
export const DropdownMenu: typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']
export const DropdownMenuTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']
export const DropdownMenuContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']
export const DropdownMenuGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']
export const DropdownMenuRadioGroup: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']
export const DropdownMenuItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']
export const DropdownMenuCheckboxItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']
export const DropdownMenuRadioItem: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']
export const DropdownMenuShortcut: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']
export const DropdownMenuSeparator: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']
export const DropdownMenuLabel: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']
export const DropdownMenuSub: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']
export const DropdownMenuSubTrigger: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']
export const DropdownMenuSubContent: typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']
export const Input: typeof import("../components/ui/input/index")['Input']
export const Select: typeof import("../components/ui/select/index")['Select']
export const SelectContent: typeof import("../components/ui/select/index")['SelectContent']
export const SelectGroup: typeof import("../components/ui/select/index")['SelectGroup']
export const SelectItem: typeof import("../components/ui/select/index")['SelectItem']
export const SelectItemText: typeof import("../components/ui/select/index")['SelectItemText']
export const SelectLabel: typeof import("../components/ui/select/index")['SelectLabel']
export const SelectScrollDownButton: typeof import("../components/ui/select/index")['SelectScrollDownButton']
export const SelectScrollUpButton: typeof import("../components/ui/select/index")['SelectScrollUpButton']
export const SelectSeparator: typeof import("../components/ui/select/index")['SelectSeparator']
export const SelectTrigger: typeof import("../components/ui/select/index")['SelectTrigger']
export const SelectValue: typeof import("../components/ui/select/index")['SelectValue']
export const Sheet: typeof import("../components/ui/sheet/index")['Sheet']
export const SheetTrigger: typeof import("../components/ui/sheet/index")['SheetTrigger']
export const SheetClose: typeof import("../components/ui/sheet/index")['SheetClose']
export const SheetContent: typeof import("../components/ui/sheet/index")['SheetContent']
export const SheetHeader: typeof import("../components/ui/sheet/index")['SheetHeader']
export const SheetTitle: typeof import("../components/ui/sheet/index")['SheetTitle']
export const SheetDescription: typeof import("../components/ui/sheet/index")['SheetDescription']
export const SheetFooter: typeof import("../components/ui/sheet/index")['SheetFooter']
export const Table: typeof import("../components/ui/table/index")['Table']
export const TableBody: typeof import("../components/ui/table/index")['TableBody']
export const TableCell: typeof import("../components/ui/table/index")['TableCell']
export const TableHead: typeof import("../components/ui/table/index")['TableHead']
export const TableHeader: typeof import("../components/ui/table/index")['TableHeader']
export const TableRow: typeof import("../components/ui/table/index")['TableRow']
export const TableCaption: typeof import("../components/ui/table/index")['TableCaption']
export const TableEmpty: typeof import("../components/ui/table/index")['TableEmpty']
export const Tabs: typeof import("../components/ui/tabs/index")['Tabs']
export const TabsTrigger: typeof import("../components/ui/tabs/index")['TabsTrigger']
export const TabsList: typeof import("../components/ui/tabs/index")['TabsList']
export const TabsContent: typeof import("../components/ui/tabs/index")['TabsContent']
export const Tooltip: typeof import("../components/ui/tooltip/index")['Tooltip']
export const TooltipContent: typeof import("../components/ui/tooltip/index")['TooltipContent']
export const TooltipTrigger: typeof import("../components/ui/tooltip/index")['TooltipTrigger']
export const TooltipProvider: typeof import("../components/ui/tooltip/index")['TooltipProvider']
export const ColorScheme: typeof import("../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']
export const NuxtPage: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyBadge: LazyComponent<typeof import("../components/ui/badge/index")['Badge']>
export const LazyBreadcrumb: LazyComponent<typeof import("../components/ui/breadcrumb/index")['Breadcrumb']>
export const LazyBreadcrumbEllipsis: LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbEllipsis']>
export const LazyBreadcrumbItem: LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbItem']>
export const LazyBreadcrumbLink: LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbLink']>
export const LazyBreadcrumbList: LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbList']>
export const LazyBreadcrumbPage: LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbPage']>
export const LazyBreadcrumbSeparator: LazyComponent<typeof import("../components/ui/breadcrumb/index")['BreadcrumbSeparator']>
export const LazyButton: LazyComponent<typeof import("../components/ui/button/index")['Button']>
export const LazyCard: LazyComponent<typeof import("../components/ui/card/index")['Card']>
export const LazyCardHeader: LazyComponent<typeof import("../components/ui/card/index")['CardHeader']>
export const LazyCardTitle: LazyComponent<typeof import("../components/ui/card/index")['CardTitle']>
export const LazyCardDescription: LazyComponent<typeof import("../components/ui/card/index")['CardDescription']>
export const LazyCardContent: LazyComponent<typeof import("../components/ui/card/index")['CardContent']>
export const LazyCardFooter: LazyComponent<typeof import("../components/ui/card/index")['CardFooter']>
export const LazyDropdownMenuPortal: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuPortal']>
export const LazyDropdownMenu: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenu']>
export const LazyDropdownMenuTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuTrigger']>
export const LazyDropdownMenuContent: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuContent']>
export const LazyDropdownMenuGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuGroup']>
export const LazyDropdownMenuRadioGroup: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioGroup']>
export const LazyDropdownMenuItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuItem']>
export const LazyDropdownMenuCheckboxItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuCheckboxItem']>
export const LazyDropdownMenuRadioItem: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuRadioItem']>
export const LazyDropdownMenuShortcut: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuShortcut']>
export const LazyDropdownMenuSeparator: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSeparator']>
export const LazyDropdownMenuLabel: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuLabel']>
export const LazyDropdownMenuSub: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSub']>
export const LazyDropdownMenuSubTrigger: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubTrigger']>
export const LazyDropdownMenuSubContent: LazyComponent<typeof import("../components/ui/dropdown-menu/index")['DropdownMenuSubContent']>
export const LazyInput: LazyComponent<typeof import("../components/ui/input/index")['Input']>
export const LazySelect: LazyComponent<typeof import("../components/ui/select/index")['Select']>
export const LazySelectContent: LazyComponent<typeof import("../components/ui/select/index")['SelectContent']>
export const LazySelectGroup: LazyComponent<typeof import("../components/ui/select/index")['SelectGroup']>
export const LazySelectItem: LazyComponent<typeof import("../components/ui/select/index")['SelectItem']>
export const LazySelectItemText: LazyComponent<typeof import("../components/ui/select/index")['SelectItemText']>
export const LazySelectLabel: LazyComponent<typeof import("../components/ui/select/index")['SelectLabel']>
export const LazySelectScrollDownButton: LazyComponent<typeof import("../components/ui/select/index")['SelectScrollDownButton']>
export const LazySelectScrollUpButton: LazyComponent<typeof import("../components/ui/select/index")['SelectScrollUpButton']>
export const LazySelectSeparator: LazyComponent<typeof import("../components/ui/select/index")['SelectSeparator']>
export const LazySelectTrigger: LazyComponent<typeof import("../components/ui/select/index")['SelectTrigger']>
export const LazySelectValue: LazyComponent<typeof import("../components/ui/select/index")['SelectValue']>
export const LazySheet: LazyComponent<typeof import("../components/ui/sheet/index")['Sheet']>
export const LazySheetTrigger: LazyComponent<typeof import("../components/ui/sheet/index")['SheetTrigger']>
export const LazySheetClose: LazyComponent<typeof import("../components/ui/sheet/index")['SheetClose']>
export const LazySheetContent: LazyComponent<typeof import("../components/ui/sheet/index")['SheetContent']>
export const LazySheetHeader: LazyComponent<typeof import("../components/ui/sheet/index")['SheetHeader']>
export const LazySheetTitle: LazyComponent<typeof import("../components/ui/sheet/index")['SheetTitle']>
export const LazySheetDescription: LazyComponent<typeof import("../components/ui/sheet/index")['SheetDescription']>
export const LazySheetFooter: LazyComponent<typeof import("../components/ui/sheet/index")['SheetFooter']>
export const LazyTable: LazyComponent<typeof import("../components/ui/table/index")['Table']>
export const LazyTableBody: LazyComponent<typeof import("../components/ui/table/index")['TableBody']>
export const LazyTableCell: LazyComponent<typeof import("../components/ui/table/index")['TableCell']>
export const LazyTableHead: LazyComponent<typeof import("../components/ui/table/index")['TableHead']>
export const LazyTableHeader: LazyComponent<typeof import("../components/ui/table/index")['TableHeader']>
export const LazyTableRow: LazyComponent<typeof import("../components/ui/table/index")['TableRow']>
export const LazyTableCaption: LazyComponent<typeof import("../components/ui/table/index")['TableCaption']>
export const LazyTableEmpty: LazyComponent<typeof import("../components/ui/table/index")['TableEmpty']>
export const LazyTabs: LazyComponent<typeof import("../components/ui/tabs/index")['Tabs']>
export const LazyTabsTrigger: LazyComponent<typeof import("../components/ui/tabs/index")['TabsTrigger']>
export const LazyTabsList: LazyComponent<typeof import("../components/ui/tabs/index")['TabsList']>
export const LazyTabsContent: LazyComponent<typeof import("../components/ui/tabs/index")['TabsContent']>
export const LazyTooltip: LazyComponent<typeof import("../components/ui/tooltip/index")['Tooltip']>
export const LazyTooltipContent: LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipContent']>
export const LazyTooltipTrigger: LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipTrigger']>
export const LazyTooltipProvider: LazyComponent<typeof import("../components/ui/tooltip/index")['TooltipProvider']>
export const LazyColorScheme: LazyComponent<typeof import("../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/component.vue3.vue")['default']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/.pnpm/nuxt@3.16.0_@parcel+watcher_db3bd2d6e5e526840950ebb14362e64b/node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
