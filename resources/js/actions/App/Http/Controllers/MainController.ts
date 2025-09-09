import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\MainController::main
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
export const main = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: main.url(options),
    method: 'get',
})

main.definition = {
    methods: ["get","head"],
    url: '/',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MainController::main
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
main.url = (options?: RouteQueryOptions) => {
    return main.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MainController::main
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
main.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: main.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MainController::main
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
main.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: main.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MainController::main
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
    const mainForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: main.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MainController::main
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
        mainForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: main.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MainController::main
 * @see app/Http/Controllers/MainController.php:8
 * @route '/'
 */
        mainForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: main.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    main.form = mainForm
/**
* @see \App\Http\Controllers\MainController::sobre
 * @see app/Http/Controllers/MainController.php:12
 * @route '/sobre'
 */
export const sobre = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sobre.url(options),
    method: 'get',
})

sobre.definition = {
    methods: ["get","head"],
    url: '/sobre',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MainController::sobre
 * @see app/Http/Controllers/MainController.php:12
 * @route '/sobre'
 */
sobre.url = (options?: RouteQueryOptions) => {
    return sobre.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MainController::sobre
 * @see app/Http/Controllers/MainController.php:12
 * @route '/sobre'
 */
sobre.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sobre.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MainController::sobre
 * @see app/Http/Controllers/MainController.php:12
 * @route '/sobre'
 */
sobre.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sobre.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MainController::sobre
 * @see app/Http/Controllers/MainController.php:12
 * @route '/sobre'
 */
    const sobreForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sobre.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MainController::sobre
 * @see app/Http/Controllers/MainController.php:12
 * @route '/sobre'
 */
        sobreForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sobre.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MainController::sobre
 * @see app/Http/Controllers/MainController.php:12
 * @route '/sobre'
 */
        sobreForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sobre.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sobre.form = sobreForm
/**
* @see \App\Http\Controllers\MainController::perfil
 * @see app/Http/Controllers/MainController.php:16
 * @route '/u'
 */
export const perfil = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: perfil.url(options),
    method: 'get',
})

perfil.definition = {
    methods: ["get","head"],
    url: '/u',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\MainController::perfil
 * @see app/Http/Controllers/MainController.php:16
 * @route '/u'
 */
perfil.url = (options?: RouteQueryOptions) => {
    return perfil.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\MainController::perfil
 * @see app/Http/Controllers/MainController.php:16
 * @route '/u'
 */
perfil.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: perfil.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\MainController::perfil
 * @see app/Http/Controllers/MainController.php:16
 * @route '/u'
 */
perfil.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: perfil.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\MainController::perfil
 * @see app/Http/Controllers/MainController.php:16
 * @route '/u'
 */
    const perfilForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: perfil.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\MainController::perfil
 * @see app/Http/Controllers/MainController.php:16
 * @route '/u'
 */
        perfilForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: perfil.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\MainController::perfil
 * @see app/Http/Controllers/MainController.php:16
 * @route '/u'
 */
        perfilForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: perfil.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    perfil.form = perfilForm
const MainController = { main, sobre, perfil }

export default MainController