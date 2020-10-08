<template>
    <div class="row">
        <div class="col">
            <input
                    :type="type"
                    class="validate"
                    :placeholder="placeholder"
                    :value="value"
                    @input="$emit('input', $event.target.value)"
            />
            <label >{{label}}</label>
        </div>

    </div>
</template>

<script>
    export default {
        // name: "Input",
        props: {
            value: {
                type: String,
                required: false,
                default: ''
            },
            label: {
                type: String,
                required: false,
                default: ''
            },
            placeholder: {
                type: String,
                required: false,
                default: ''
            },
            type: {
                type: String,
                required: false,
                default: 'text'
            }
        },
    }
</script>

<style scoped>
    .validate {
        color: #555;
        width: 100%;
        box-sizing: border-box;
        letter-spacing: 1px;
        outline: none;
        border: none;
        padding: 4px 0;
        border-bottom: 1px solid #ccc;
        background-color: transparent;
    }
    .row {
        margin: 25px 350px;
    }

    label {
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        line-height: 30px;
        color: #2F4F4F;
        text-decoration: none;
    }
    .col {

    }
</style>
