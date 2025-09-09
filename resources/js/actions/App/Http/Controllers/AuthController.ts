import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AuthController::registro
 * @see app/Http/Controllers/AuthController.php:14
 * @route '/api/registro'
 */
export const registro = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registro.url(options),
    method: 'post',
})

registro.definition = {
    methods: ["post"],
    url: '/api/registro',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::registro
 * @see app/Http/Controllers/AuthController.php:14
 * @route '/api/registro'
 */
registro.url = (options?: RouteQueryOptions) => {
    return registro.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::registro
 * @see app/Http/Controllers/AuthController.php:14
 * @route '/api/registro'
 */
registro.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: registro.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuthController::registro
 * @see app/Http/Controllers/AuthController.php:14
 * @route '/api/registro'
 */
    const registroForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: registro.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuthController::registro
 * @see app/Http/Controllers/AuthController.php:14
 * @route '/api/registro'
 */
        registroForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: registro.url(options),
            method: 'post',
        })
    
    registro.form = registroForm
/**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:57
 * @route '/api/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:57
 * @route '/api/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:57
 * @route '/api/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:57
 * @route '/api/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: login.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\AuthController::login
 * @see app/Http/Controllers/AuthController.php:57
 * @route '/api/login'
 */
        loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: login.url(options),
            method: 'post',
        })
    
    login.form = loginForm
const AuthController = { registro, login }

export default AuthController