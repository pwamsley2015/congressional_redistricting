package algorithm_steps;

import algorithm.AlgorithmStep;
import algorithm.AlgorithmStepStatus;
import mm_districting.AlgorithmProperties;
import mm_districting.DemographicContext;
import mm_districting.Precinct;
import mm_districting.State;
import results.Phase0DemographicResult;
import results.Result;
import util.Race;

import java.util.HashSet;
import java.util.Set;

/**
 * Phase0, step 1: Determine Demographics Blocs (Use case #23)
 * <p>
 * Identifies which precincts in the selected state contain a Demographic Bloc, as defined by
 * the demographics and thresholds selected by the user.
 *
 * @author Patrick Wamsley
 * @see mm_districting/AlgorithmProperties
 * @see results/Phase0DemographicResult
 */
public class DetermineDemBlocs implements AlgorithmStep {

    /**
     * Iterates through the current state's precincts and identifies which contain demographic blocs
     *
     * @return true when completed
     */
    @Override
    public boolean run() {
        AlgorithmProperties algProps = AlgorithmProperties.getProperties();

        Set<Race> selectedDems = algProps.getSelectedDemographics();
        State state = algProps.getState();
        Set<Precinct> precincts = state.getPrecincts();

        for (Precinct precinct : precincts) {
            DemographicContext demographicData = precinct.getDemographics();
            for (Race dem : selectedDems) {
                int demographicPercent =
                        (int) ( ( demographicData.getByRace(dem) * 1.0 / demographicData.getTotal() ) * 100 );

                if (algProps.getBlocThreshold() <= demographicPercent) {
                    precinct.setDemographicBloc(dem);
                    algProps.getPrecinctsWithDemBlocs().add(precinct);
                }
            }
        }

        return true;
    }

    /**
     * This algorithm step completes in one iteration of run()
     */
    @Override
    public AlgorithmStepStatus getStatus() {
        AlgorithmStepStatus status = new AlgorithmStepStatus("Determine Demographic Blocs");
        status.setProgress(1);
        return status;
    }

    /**
     * This algorithm step is atomic and therefore cannot be paused
     */
    @Override
    public void pause() {}

    /**
     * Constructs a {@code Phase0DemographicResult} object containing the set of precincts which contain a demographic bloc.
     */
    @Override
    public Result onCompletion() {

        AlgorithmProperties algProps = AlgorithmProperties.getProperties();
        Set<Precinct> precinctsWithDemBloc = new HashSet<>();

        for (Precinct precinct : algProps.getState().getPrecincts()) {
            if (precinct.getDemographicBloc() != null &&
                algProps.getSelectedDemographics().contains(precinct.getDemographicBloc())) {
                Precinct clone = new Precinct();
                clone.setCounty(precinct.getCounty());
                clone.setGeoId(precinct.getGeoId());
                clone.setDemographicBloc(precinct.getDemographicBloc());
                clone.setDemographics(precinct.getDemographics());
                precinctsWithDemBloc.add(clone);
            }
        }

        return new Phase0DemographicResult(precinctsWithDemBloc);

    }

}
