<template>
    <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-6" style="height:500px;">
            <h3 style="color:grey">Editor</h3>
            <div style="border:1px solid grey; padding:10px; height:500px;">
                Content...
            </div>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6">
            <h3 style="color:grey">Preview</h3>
            <div id="render-template" style="border:1px solid grey; padding:10px;">
                Content...
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery'
    import bookListingTemplate from '../book-listing.handlebars'

    document.addEventListener("DOMContentLoaded", function() {
        console.log('im here')
        var div = document.createElement('div');
        div.innerHTML = bookListingTemplate({
            username: "test",
            info: "Your books are due next Tuesday",
            books: [
                { title: "A book", synopsis: "With a description" },
                { title: "Another book", synopsis: "From a very good author" },
                { title: "Book without synopsis" }
            ]
        });
        document.body.appendChild(div);
    });


    export default {
        name: 'home',
        mounted() {
            const parent = document.getElementById("render-template")
            const div = document.createElement('div');
            div.innerHTML = bookListingTemplate({
                username: "test",
                info: "Your books are due next Tuesday",
                books: [
                    { title: "A book", synopsis: "With a description" },
                    { title: "Another book", synopsis: "From a very good author" },
                    { title: "Book without synopsis" }
                ]
            })
            parent.appendChild(div);
        },
        data () {
            return {
            }
        },
        methods: {

        }
    }

</script>

<style>


</style>