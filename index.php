<!doctype html>
<html lang="fr">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>API Rest</title>
</head>
<body>
<div class="container-fluid">
    <div class="container">
        <div class="row text-center">
            <div class="col-md-12 jumbotron ">
                <h1>API Rest Air France Training</h1>
            </div>

            <div class="col-md-12 d-flex flex-column align-items-center">
                <h3>Ajouter un avion</h3>
                <form>

                    <div class="form-group col-md-12">
                        <label for="inputAvionneur">Avionneur</label>
                        <input name="manufacturer" type="text" class="form-control" id="inputAvionneur">
                    </div>

                    <div class="form-group col-md-12">
                        <label for="inputDesc">Description</label>
                        <input name="description" type="text" class="form-control" id="inputDesc"
                               placeholder="Bleu Bi-moteur">
                    </div>

                    <div class="form-group col-md-12">
                        <label for="inputModel">Modéle</label>
                        <input name="model" type="text" class="form-control" id="inputModel" placeholder="A380">
                    </div>

                    <div class="form-group col-md-12">
                        <label for="inputYear">Année</label>
                        <input name="date" type="date" class="form-control" id="inputYear" placeholder="A380">
                    </div>

                    <div class="input-group col-md-12">
                        <select name="service" class="custom-select" id="inputGroupSelect02">
                            <option selected>En service</option>
                            <option value="1">oui</option>
                            <option value="0">non</option>
                        </select>
                    </div>

                    <div class="form-group col-md-12">
                        <label for="inputID">Place</label>
                        <input name="place" type="number" class="form-control" id="inputID">
                    </div>

                    <div class="form-group col-md-12">
                        <label for="inputInterieur">Intérieur</label>
                        <input name="interior" type="text" class="form-control" id="inputInterieur"
                               placeholder="2018BA">
                    </div>

                    <div class="form-group col-md-12">
                        <label for="inputIncident">Incident</label>
                        <input name="incident" type="number" class="form-control" id="inputIncident" placeholder="0">
                    </div>

                    <button type="submit" class="btn btn-primary">Ajouter</button>
                </form>
            </div>
        </div>
    </div>
</div>


<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossorigin="anonymous"></script>
</body>
</html>